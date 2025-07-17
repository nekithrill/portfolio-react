import { DigitalClock } from '@/features/digital-clock/DigitalClock'
import { LanguageSwitcher } from '@/features/language-switcher/LanguageSwitcher'
import { ThemeSwitcher } from '@/features/theme-switcher/ThemeSwitcher'
import styles from './header.module.scss'
import { Logo } from './Logo'

export const Header = () => {
	return (
		<header className={styles['header']}>
			<div className={styles['header__logo']}>
				<Logo />
			</div>
			<div className={styles['header__clock']}>
				<DigitalClock />
			</div>
			<div className={styles['header__settings']}>
				<LanguageSwitcher />
				<ThemeSwitcher />
			</div>
		</header>
	)
}
