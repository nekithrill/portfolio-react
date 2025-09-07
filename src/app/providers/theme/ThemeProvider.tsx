import type { ThemeSwitchResult } from '@/features/theme-switch/ThemeSwitch.types'
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
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
		try {
			const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY)
			if (storedTheme) return storedTheme === 'dark'
			return window.matchMedia('(prefers-color-scheme: dark)').matches
		} catch {
			return false
		}
	})

	useEffect(() => {
		try {
			const root = document.documentElement
			root.classList.toggle(THEME_DARK_CLASS, isDarkTheme)
			root.classList.toggle(THEME_LIGHT_CLASS, !isDarkTheme)
			localStorage.setItem(
				LOCAL_STORAGE_THEME_KEY,
				isDarkTheme ? 'dark' : 'light'
			)
		} catch (error) {
			console.warn('Failed to access localStorage:', error)
		}
	}, [isDarkTheme])

	const toggleTheme = () => setIsDarkTheme(prev => !prev)

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) throw new Error('useTheme must be used within ThemeProvider')
	return context
}
