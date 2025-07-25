import { Clock } from '@/features/clock/Clock'
import { LanguageSwitch } from '@/features/language-switch/LanguageSwitch'
import { ThemeSwitch } from '@/features/theme-switch/ThemeSwitch'
import { Logo } from '@/shared/components/icons/Logo'
import styles from './header.module.scss'

export const Header = () => {
	return (
		<header className={styles['header']}>
			<div className={styles['header__logo']}>
				<Logo />
			</div>
			<div className={styles['header__clock']}>
				<Clock />
			</div>
			<div className={styles['header__settings']}>
				<LanguageSwitch />
				<ThemeSwitch />
			</div>
		</header>
	)
}
