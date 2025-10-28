import { AboutPage } from '@/app/pages/about/AboutPage'
import { ContactsPage } from '@/app/pages/contacts/ContactsPage'
import { HomePage } from '@/app/pages/home/HomePage'
import { PrivacyPage } from '@/app/pages/privacy/PrivacyPage'
import { ProjectsPage } from '@/app/pages/projects/ProjectsPage'
import { SkillsPage } from '@/app/pages/skills/SkillsPage'
import '@/app/styles/globals.scss'
import { MainLayout } from '@/shared/components/layout/MainLayout'
import { Background } from '@/shared/components/ui/background/Background'
import '@/shared/config/i18n/config'
import { RootProvider } from '@/shared/providers/RootProvider'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<>
			<Background cellSize={62} lineColor='var(--clr-grid-line)' speed={1.5} />

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
		</>
	)
}
