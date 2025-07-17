import useLanguageSwitch from '@/features/language-switcher/useLanguageSwitch'
import styles from './language-switcher.module.scss'

export const LanguageSwitcher = () => {
	const { selectedLanguage, changeLanguage } = useLanguageSwitch()

	return (
		<div className={styles['language-switcher']}>
			<label>
				<input
					type='radio'
					value='en'
					checked={selectedLanguage === 'en'}
					onChange={e => changeLanguage(e.target.value)}
				/>
				<span>EN</span>
			</label>
			<label>
				<input
					type='radio'
					value='uk'
					checked={selectedLanguage === 'uk'}
					onChange={e => changeLanguage(e.target.value)}
				/>
				<span>UA</span>
			</label>
			<label>
				<input
					type='radio'
					value='ru'
					checked={selectedLanguage === 'ru'}
					onChange={e => changeLanguage(e.target.value)}
				/>
				<span>RU</span>
			</label>
		</div>
	)
}
