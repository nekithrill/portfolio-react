import enTranslation from '@/app/config/i18n/locales/en.json'
import ruTranslation from '@/app/config/i18n/locales/ru.json'
import uaTranslation from '@/app/config/i18n/locales/ua.json'
import {
	LANGUAGES,
	type Language
} from '@/features/language-switch/LanguageSwitch.types'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources: Record<Language, { translation: object }> = {
	[LANGUAGES.EN]: { translation: enTranslation },
	[LANGUAGES.RU]: { translation: ruTranslation },
	[LANGUAGES.UK]: { translation: uaTranslation }
}

i18n.use(initReactI18next).init({
	resources,
	lng: LANGUAGES.EN,
	fallbackLng: LANGUAGES.EN,
	interpolation: {
		escapeValue: false
	}
})

export default i18n
