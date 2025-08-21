export const LOCAL_STORAGE_LANGUAGE_KEY = 'language'

export const LANGUAGES = {
	EN: { value: 'en', label: 'EN' },
	UA: { value: 'uk', label: 'UA' },
	RU: { value: 'ru', label: 'RU' }
} as const

export type Language = (typeof LANGUAGES)[keyof typeof LANGUAGES]['value']

export const LANGUAGE_LABELS: Record<Language, string> = {
	en: 'EN',
	uk: 'UA',
	ru: 'RU'
}

export interface UseLanguageSwitchResult {
	selectedLanguage: Language
	changeLanguage: (language: Language) => void
}
