import { useLanguage } from '@/app/providers/language/LanguageProvider'
import styles from './LanguageSwitch.module.scss'
import { LANGUAGES } from './LanguageSwitch.types'

export const LanguageSwitch = () => {
	const { language, setLanguage } = useLanguage()

	return (
		<div className={styles['language-switcher']}>
			{Object.values(LANGUAGES).map(lang => (
				<button
					key={lang.value}
					onClick={() => setLanguage(lang.value)}
					className={`${styles['language-switcher__button']} ${
						lang.value === language ? styles['active'] : ''
					}`}
				>
					{lang.label}
				</button>
			))}
		</div>
	)
}
