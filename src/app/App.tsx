import { MainLayout } from '@/app/layouts/MainLayout'
import { AboutPage } from '@/app/pages/about/AboutPage'
import { ContactsPage } from '@/app/pages/contacts/ContactsPage'
import { HomePage } from '@/app/pages/home/HomePage'
import { PrivacyPage } from '@/app/pages/privacy/PrivacyPage'
import { ProjectsPage } from '@/app/pages/projects/ProjectsPage'
import { SkillsPage } from '@/app/pages/skills/SkillsPage'
import { RootProvider } from '@/app/providers/RootProvider'
import '@/app/styles/globals.scss'
import { Background } from '@/shared/components/ui/background/Background'
import '@/shared/configs/i18n/config'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	return (
		<>
			<Background
				lineColor='var(--clr-grid-line)'
				lineWidth={2}
				cellSize={192}
				speed={2.5}
			/>

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
