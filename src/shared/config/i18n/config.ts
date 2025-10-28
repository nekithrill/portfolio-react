import { LANGUAGES, type Language } from '@/shared/types/locale'
import enTranslation from '@dictionaries/en.json'
import ruTranslation from '@dictionaries/ru.json'
import uaTranslation from '@dictionaries/ua.json'
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
