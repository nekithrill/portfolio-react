import enTranslation from '@/app/config/i18n/locales/en.json'
import ruTranslation from '@/app/config/i18n/locales/ru.json'
import uaTranslation from '@/app/config/i18n/locales/ua.json'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: enTranslation
		},
		ru: {
			translation: ruTranslation
		},
		uk: {
			translation: uaTranslation
		}
	},

	lng: 'en',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false
	}
})

export default i18n
