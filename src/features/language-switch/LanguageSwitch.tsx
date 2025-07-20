import useLanguageSwitch from '@/features/language-switch/useLanguageSwitch'
import styles from './LanguageSwitch.module.scss'
import { LANGUAGES, Language } from './LanguageSwitch.types'

export const LanguageSwitch = () => {
	const { selectedLanguage, changeLanguage } = useLanguageSwitch()

	const renderLanguageOption = (lang: Language, label: string) => (
		<label key={lang}>
			<input
				type='radio'
				value={lang}
				checked={selectedLanguage === lang}
				onChange={() => changeLanguage(lang)}
			/>
			<span>{label}</span>
		</label>
	)

	return (
		<div className={styles['language-switcher']}>
			{renderLanguageOption(LANGUAGES.EN, 'EN')}
			{renderLanguageOption(LANGUAGES.UK, 'UA')}
			{renderLanguageOption(LANGUAGES.RU, 'RU')}
		</div>
	)
}
