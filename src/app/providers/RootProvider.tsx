import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './language/LanguageProvider'
import { ThemeProvider } from './theme/ThemeProvider'

interface RootProvider {
	children: ReactNode
}

export const RootProvider = ({ children }: RootProvider) => {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<LanguageProvider>{children}</LanguageProvider>
			</ThemeProvider>
		</BrowserRouter>
	)
}
