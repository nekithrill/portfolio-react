import useThemeSwitcher from '@/features/theme-switcher/useThemeSwitch'
import styles from './theme-switcher.module.scss'

export const ThemeSwitcher = () => {
	const { isDarkTheme, toggleTheme } = useThemeSwitcher()

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
