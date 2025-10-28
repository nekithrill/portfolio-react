import {
	LOCAL_STORAGE_THEME_KEY,
	THEME_DARK_CLASS,
	THEME_LIGHT_CLASS,
	type Theme,
	type ThemeSwitchResult
} from '@/shared/types/theme'
import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode
} from 'react'

interface ThemeProviderProps {
	children: ReactNode
}

const ThemeContext = createContext<ThemeSwitchResult | null>(null)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>(() => {
		const stored = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme | null
		return stored ?? 'system'
	})

	useEffect(() => {
		const root = document.documentElement
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches

		const appliedTheme =
			theme === 'system' ? (prefersDark ? 'dark' : 'light') : theme

		root.classList.remove(THEME_DARK_CLASS, THEME_LIGHT_CLASS)
		root.classList.add(
			appliedTheme === 'dark' ? THEME_DARK_CLASS : THEME_LIGHT_CLASS
		)

		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
	}, [theme])

	const value = useMemo(() => ({ theme, setTheme }), [theme])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within ThemeProvider')
	}
	return context
}
