import { useLanguage } from '@/app/providers/language/LanguageProvider'
import type { Language } from './LanguageSwitch.types'

export const useLanguageSwitch = () => {
	const { language, setLanguage } = useLanguage()

	const changeLanguage = (lang: Language) => {
		setLanguage(lang)
	}

	return { selectedLanguage: language, changeLanguage }
}
