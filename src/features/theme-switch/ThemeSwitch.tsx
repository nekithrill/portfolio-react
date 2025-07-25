import useThemeSwitch from '@/features/theme-switch/useThemeSwitch'
import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import { MoonIcon } from '@/shared/components/icons/MoonIcon'
import { SunIcon } from '@/shared/components/icons/SunIcon'
import styles from './ThemeSwitch.module.scss'

export const ThemeSwitch = () => {
	const { isDarkTheme, toggleTheme } = useThemeSwitch()

	return (
		<div className={styles['theme-switch']}>
			<input
				id='theme-switch'
				type='checkbox'
				checked={isDarkTheme}
				onChange={toggleTheme}
				className={styles['input']}
			/>

			<label htmlFor='theme-switch' className={styles['label']} tabIndex={0}>
				<div className={styles['icons']}>
					<IconWrapper size={22} color='var(--clr-switch-icon)'>
						<SunIcon svgClassName={styles['sun']} isActive={!isDarkTheme} />
					</IconWrapper>
					<IconWrapper size={20} color='var(--clr-switch-icon)'>
						<MoonIcon svgClassName={styles['moon']} isActive={isDarkTheme} />
					</IconWrapper>
				</div>
			</label>
		</div>
	)
}
