export const THEME_DARK_CLASS = 'dark-theme'
export const THEME_LIGHT_CLASS = 'light-theme'
export const LOCAL_STORAGE_THEME_KEY = 'theme'

export interface ThemeSwitcherResult {
	isDarkTheme: boolean
	toggleTheme: () => void
}
