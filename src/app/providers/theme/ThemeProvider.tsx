import type {
	Theme,
	ThemeSwitchResult
} from '@/features/theme-switch/ThemeSwitch.types'
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME_DARK_CLASS,
	THEME_LIGHT_CLASS
} from '@/features/theme-switch/ThemeSwitch.types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext<ThemeSwitchResult | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [theme, setTheme] = useState<Theme>(() => {
		try {
			const storedTheme = localStorage.getItem(
				LOCAL_STORAGE_THEME_KEY
			) as Theme | null
			return storedTheme ?? 'system'
		} catch {
			return 'system'
		}
	})

	useEffect(() => {
		try {
			const root = document.documentElement
			let appliedTheme: 'dark' | 'light'

			if (theme === 'system') {
				appliedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
			} else {
				appliedTheme = theme
			}

			root.classList.toggle(THEME_DARK_CLASS, appliedTheme === 'dark')
			root.classList.toggle(THEME_LIGHT_CLASS, appliedTheme === 'light')

			localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
		} catch (error) {
			console.warn('Failed to access localStorage:', error)
		}
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) throw new Error('useTheme must be used within ThemeProvider')
	return context
}
