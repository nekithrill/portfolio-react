import useLanguageSwitch from '@/features/language-switch/useLanguageSwitch'
import styles from './LanguageSwitch.module.scss'
import { LANGUAGES, LANGUAGE_LABELS } from './LanguageSwitch.types'

export const LanguageSwitch = () => {
	const { selectedLanguage, changeLanguage } = useLanguageSwitch()

	return (
		<div className={styles['language-switcher']}>
			{Object.values(LANGUAGES).map(lang => (
				<button
					key={lang.value}
					onClick={() => changeLanguage(lang.value)}
					className={`${styles['language-switcher__button']} ${
						lang.value === selectedLanguage ? styles['active'] : ''
					}`}
				>
					{LANGUAGE_LABELS[lang.value]}
				</button>
			))}
		</div>
	)
}
