import styles from './LanguageSwitch.module.scss'
import { LANGUAGES } from './LanguageSwitch.types'
import { useLanguageSwitch } from './useLanguageSwitch'

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
					{lang.label}
				</button>
			))}
		</div>
	)
}
