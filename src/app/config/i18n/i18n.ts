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
	[LANGUAGES.EN.value]: { translation: enTranslation },
	[LANGUAGES.RU.value]: { translation: ruTranslation },
	[LANGUAGES.UA.value]: { translation: uaTranslation }
}

i18n.use(initReactI18next).init({
	resources,
	lng: LANGUAGES.EN.value,
	fallbackLng: LANGUAGES.EN.value,
	interpolation: {
		escapeValue: false
	}
})

export default i18n
