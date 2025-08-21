import '@/app/config/i18n/i18n'
import '@/app/styles/globals.scss'
import { MainLayout } from '@/shared/components/layout/MainLayout'
import { SectionsLayout } from '@/shared/components/layout/sections-layout/SectionsLayout'

export default function App() {
	return (
		<div className='app'>
			<MainLayout>
				<SectionsLayout />
			</MainLayout>
		</div>
	)
}
