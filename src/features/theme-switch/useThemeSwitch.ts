import { useEffect, useState } from 'react'
import type { ThemeSwitcherResult } from './ThemeSwitcher.types'
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME_DARK_CLASS,
	THEME_LIGHT_CLASS
} from './ThemeSwitcher.types'

export default function useThemeSwitch(): ThemeSwitcherResult {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
		return localStorage.getItem(LOCAL_STORAGE_THEME_KEY) === 'dark'
	})

	useEffect(() => {
		document.body.classList.toggle(THEME_DARK_CLASS, isDarkTheme)
		document.body.classList.toggle(THEME_LIGHT_CLASS, !isDarkTheme)
		localStorage.setItem(
			LOCAL_STORAGE_THEME_KEY,
			isDarkTheme ? 'dark' : 'light'
		)
	}, [isDarkTheme])

	const toggleTheme = () => {
		setIsDarkTheme(prev => !prev)
	}

	return { isDarkTheme, toggleTheme }
}
