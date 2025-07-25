import useLanguageSwitch from '@/features/language-switch/useLanguageSwitch'
import { useState } from 'react'
import styles from './LanguageSwitch.module.scss'
import { LANGUAGES, Language } from './LanguageSwitch.types'

const languageLabels: Record<Language, string> = {
	en: 'EN',
	uk: 'UA',
	ru: 'RU'
}

export const LanguageSwitch = () => {
	const { selectedLanguage, changeLanguage } = useLanguageSwitch()
	const [isOpen, setIsOpen] = useState(false)

	const toggleDropdown = () => setIsOpen(prev => !prev)

	const handleSelect = (lang: Language) => {
		changeLanguage(lang)
		setIsOpen(false)
	}

	return (
		<div className={styles['language-switcher']}>
			<button
				className={styles['language-switcher__trigger']}
				onClick={toggleDropdown}
				aria-expanded={isOpen}
			>
				{languageLabels[selectedLanguage]}
				<span className={styles['language-switcher__arrow']} />
			</button>

			{isOpen && (
				<ul className={styles['language-switcher__dropdown']}>
					{Object.values(LANGUAGES).map(lang => (
						<li
							key={lang}
							onClick={() => handleSelect(lang)}
							className={
								lang === selectedLanguage ? styles['active'] : undefined
							}
						>
							{languageLabels[lang]}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
