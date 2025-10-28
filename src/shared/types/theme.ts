export const THEME_DARK_CLASS = 'dark-theme'
export const THEME_LIGHT_CLASS = 'light-theme'
export const LOCAL_STORAGE_THEME_KEY = 'theme'

export type Theme = 'system' | 'light' | 'dark'

export interface ThemeSwitchResult {
	theme: Theme
	setTheme: (theme: Theme) => void
}
