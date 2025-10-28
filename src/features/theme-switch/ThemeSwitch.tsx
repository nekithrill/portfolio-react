import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import { MoonIcon } from '@/shared/components/icons/MoonIcon'
import { SunIcon } from '@/shared/components/icons/SunIcon'
import { SystemIcon } from '@/shared/components/icons/SystemIcon'
import { Switch } from '@/shared/components/ui/switch/Switch'
import { useTheme } from '@/shared/providers/theme/ThemeProvider'
import styles from './ThemeSwitch.module.scss'

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme()

	const items = [
		{
			key: 'system',
			icon: (
				<IconWrapper width={18} height={18}>
					<SystemIcon svgClassName={styles['system-icon']} />
				</IconWrapper>
			),
			ariaLabel: 'Switch to system theme',
			onClick: () => setTheme('system'),
			isActive: theme === 'system'
		},
		{
			key: 'light',
			icon: (
				<IconWrapper width={18} height={18}>
					<SunIcon svgClassName={styles['sun-icon']} />
				</IconWrapper>
			),
			ariaLabel: 'Switch to light theme',
			onClick: () => setTheme('light'),
			isActive: theme === 'light'
		},
		{
			key: 'dark',
			icon: (
				<IconWrapper width={18} height={18}>
					<MoonIcon svgClassName={styles['moon-icon']} />
				</IconWrapper>
			),
			ariaLabel: 'Switch to dark theme',
			onClick: () => setTheme('dark'),
			isActive: theme === 'dark'
		}
	]

	return <Switch items={items} />
}
