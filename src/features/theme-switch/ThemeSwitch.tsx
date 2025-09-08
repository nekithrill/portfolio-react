import { useTheme } from '@/app/providers/theme/ThemeProvider'
import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import { MoonIcon } from '@/shared/components/icons/MoonIcon'
import { SunIcon } from '@/shared/components/icons/SunIcon'
import styles from './ThemeSwitch.module.scss'

export const ThemeSwitch = () => {
	const { isDarkTheme, toggleTheme } = useTheme()

	const buttons = [
		{
			icon: <SunIcon svgClassName={styles['sun-icon']} />,
			size: 19,
			isActive: !isDarkTheme,
			label: 'Switch to light theme',
			onClick: () => isDarkTheme && toggleTheme()
		},
		{
			icon: <MoonIcon svgClassName={styles['moon-icon']} />,
			size: 17,
			isActive: isDarkTheme,
			label: 'Switch to dark theme',
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
					aria-label={btn.label}
					aria-pressed={btn.isActive}
				>
					<IconWrapper size={btn.size}>{btn.icon}</IconWrapper>
				</button>
			))}
		</div>
	)
}
