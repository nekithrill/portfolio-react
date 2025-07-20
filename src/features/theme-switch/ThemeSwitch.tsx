import useThemeSwitch from '@/features/theme-switch/useThemeSwitch'
import styles from './ThemeSwitch.module.scss'

export const ThemeSwitch = () => {
	const { isDarkTheme, toggleTheme } = useThemeSwitch()

	return (
		<div className={styles['theme-switcher']}>
			<label>
				<input type='checkbox' checked={isDarkTheme} onChange={toggleTheme} />
				<span className={styles.slider}></span>
				<span className={styles['theme-label']}>
					{isDarkTheme ? 'Dark' : 'Light'}
				</span>
			</label>
		</div>
	)
}
