import { useTheme } from '@/app/providers/theme/ThemeProvider'
import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import { MoonIcon } from '@/shared/components/icons/MoonIcon'
import { SunIcon } from '@/shared/components/icons/SunIcon'
import { SystemIcon } from '@/shared/components/icons/SystemIcon'
import styles from './ThemeSwitch.module.scss'

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme()

	const buttons = [
		{
			icon: <SystemIcon />,
			size: 18,
			isActive: theme === 'system',
			label: 'Switch to system theme',
			onClick: () => setTheme('system')
		},
		{
			icon: <SunIcon svgClassName={styles['sun-icon']} />,
			size: 18,
			isActive: theme === 'light',
			label: 'Switch to light theme',
			onClick: () => setTheme('light')
		},
		{
			icon: <MoonIcon svgClassName={styles['moon-icon']} />,
			size: 18,
			isActive: theme === 'dark',
			label: 'Switch to dark theme',
			onClick: () => setTheme('dark')
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
