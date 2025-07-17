import { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
		return localStorage.getItem('theme') === 'dark'
	})

	useEffect(() => {
		document.body.classList.toggle('dark-theme', isDarkTheme)
		document.body.classList.toggle('light-theme', !isDarkTheme)

		localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
	}, [isDarkTheme])

	const toggleTheme = () => {
		setIsDarkTheme(prev => !prev)
	}

	return { isDarkTheme, toggleTheme }
}

export default useThemeSwitcher
