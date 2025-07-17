import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function useLanguageSwitch() {
	const { i18n } = useTranslation()
	const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
		return localStorage.getItem('language') || 'en'
	})

	useEffect(() => {
		i18n.changeLanguage(selectedLanguage)
		localStorage.setItem('language', selectedLanguage)
	}, [selectedLanguage, i18n])

	const changeLanguage = (language: string) => {
		setSelectedLanguage(language)
	}

	return { selectedLanguage, changeLanguage }
}
