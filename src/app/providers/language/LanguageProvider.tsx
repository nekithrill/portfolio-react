import {
	Language,
	LANGUAGES,
	LOCAL_STORAGE_LANGUAGE_KEY
} from '@/shared/types/locale'
import {
	createContext,
	useContext,
	useEffect,
	useState,
	type ReactNode
} from 'react'
import { useTranslation } from 'react-i18next'

interface LanguageProviderProps {
	children: ReactNode
}

interface LanguageContextType {
	language: Language
	setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
)

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
	const { i18n } = useTranslation()
	const [language, setLanguage] = useState<Language>(() => {
		try {
			const lang = localStorage.getItem(
				LOCAL_STORAGE_LANGUAGE_KEY
			) as Language | null
			return lang &&
				Object.values(LANGUAGES)
					.map(l => l.value)
					.includes(lang)
				? lang
				: LANGUAGES.EN.value
		} catch {
			return LANGUAGES.EN.value
		}
	})

	useEffect(() => {
		i18n.changeLanguage(language).then(() => {
			localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, language)
		})
	}, [language, i18n])

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context)
		throw new Error('useLanguage must be used within LanguageProvider')
	return context
}
