import '@/app/config/i18n/i18n'
import { AboutPage } from '@/app/pages/about/AboutPage'
import { ContactsPage } from '@/app/pages/contacts/ContactsPage'
import { HomePage } from '@/app/pages/home/HomePage'
import { ProjectsPage } from '@/app/pages/projects/ProjectsPage'
import { SkillsPage } from '@/app/pages/skills/SkillsPage'
import '@/app/styles/globals.scss'
import { MainLayout } from '@/shared/components/layout/MainLayout'
import { Route, Routes } from 'react-router-dom'
import { PrivacyPage } from './pages/privacy-credits/PrivacyPage'
import { RootProvider } from './providers/RootProvider'

export default function App() {
	return (
		<div className='app'>
			<RootProvider>
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<HomePage />} />
						<Route path='about' element={<AboutPage />} />
						<Route path='skills' element={<SkillsPage />} />
						<Route path='projects' element={<ProjectsPage />} />
						<Route path='contacts' element={<ContactsPage />} />
						<Route path='privacy' element={<PrivacyPage />} />
					</Route>
				</Routes>
			</RootProvider>
		</div>
	)
}
