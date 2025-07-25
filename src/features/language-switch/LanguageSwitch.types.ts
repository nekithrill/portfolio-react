export const LOCAL_STORAGE_LANGUAGE_KEY = 'language'

export const LANGUAGES = {
	EN: 'en',
	UK: 'uk',
	RU: 'ru'
} as const

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES]

export interface UseLanguageSwitchResult {
	selectedLanguage: Language
	changeLanguage: (language: Language) => void
}
