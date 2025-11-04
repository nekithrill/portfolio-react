import { useLanguage } from '@/app/providers/language/LanguageProvider'
import { Switch } from '@/shared/components/ui/switch/Switch'
import { LANGUAGES } from '@/shared/types/locale'

export const LanguageSwitch = () => {
	const { language, setLanguage } = useLanguage()

	const items = Object.values(LANGUAGES).map(lang => ({
		key: lang.value,
		label: lang.label,
		onClick: () => setLanguage(lang.value),
		isActive: language === lang.value
	}))

	return <Switch items={items} />
}
