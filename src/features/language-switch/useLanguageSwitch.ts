import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { Language, UseLanguageSwitchResult } from './LanguageSwitch.types'
import { LANGUAGES, LOCAL_STORAGE_LANGUAGE_KEY } from './LanguageSwitch.types'

export default function useLanguageSwitch(): UseLanguageSwitchResult {
	const { i18n } = useTranslation()
	const [selectedLanguage, setSelectedLanguage] = useState<Language>(() => {
		const lang = localStorage.getItem(
			LOCAL_STORAGE_LANGUAGE_KEY
		) as Language | null
		return lang && Object.values(LANGUAGES).includes(lang) ? lang : LANGUAGES.EN
	})

	useEffect(() => {
		i18n.changeLanguage(selectedLanguage)
		localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, selectedLanguage)
	}, [selectedLanguage, i18n])

	const changeLanguage = (language: Language) => {
		setSelectedLanguage(language)
	}

	return { selectedLanguage, changeLanguage }
}
