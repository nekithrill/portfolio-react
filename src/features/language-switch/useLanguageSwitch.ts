import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Language, UseLanguageSwitchResult } from './LanguageSwitch.types'
import { LANGUAGES } from './LanguageSwitch.types'

export default function useLanguageSwitch(): UseLanguageSwitchResult {
	const { i18n } = useTranslation()
	const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
		const lang = localStorage.getItem('language') as Language | null
		return lang && Object.values(LANGUAGES).includes(lang) ? lang : LANGUAGES.EN
	})

	useEffect(() => {
		i18n.changeLanguage(selectedLanguage)
		localStorage.setItem('language', selectedLanguage)
	}, [selectedLanguage, i18n])

	const changeLanguage = (language: Language) => {
		setSelectedLanguage(language)
	}

	return { selectedLanguage, changeLanguage }
}
