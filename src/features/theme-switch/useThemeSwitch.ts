import { useEffect, useState } from 'react'
import type { ThemeSwitchResult } from './ThemeSwitch.types'
import {
	LOCAL_STORAGE_THEME_KEY,
	THEME_DARK_CLASS,
	THEME_LIGHT_CLASS
} from './ThemeSwitch.types'

export default function useThemeSwitch(): ThemeSwitchResult {
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
