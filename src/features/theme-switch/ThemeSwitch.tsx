import useThemeSwitch from '@/features/theme-switch/useThemeSwitch'
import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import { MoonIcon } from '@/shared/components/icons/MoonIcon'
import { SunIcon } from '@/shared/components/icons/SunIcon'
import styles from './ThemeSwitch.module.scss'

export const ThemeSwitch = () => {
	const { isDarkTheme, toggleTheme } = useThemeSwitch()

	const buttons = [
		{
			icon: <SunIcon isActive={!isDarkTheme} />,
			size: 22,
			isActive: !isDarkTheme,
			onClick: () => isDarkTheme && toggleTheme()
		},
		{
			icon: <MoonIcon isActive={isDarkTheme} />,
			size: 19,
			isActive: isDarkTheme,
			onClick: () => !isDarkTheme && toggleTheme()
		}
	]

	return (
		<div className={styles['theme-switcher']}>
			{buttons.map((btn, index) => (
				<button
					key={index}
					onClick={btn.onClick}
					className={`${styles['theme-switcher__button']} ${btn.isActive ? styles['active'] : ''}`}
				>
					<IconWrapper size={btn.size}>{btn.icon}</IconWrapper>
				</button>
			))}
		</div>
	)
}
