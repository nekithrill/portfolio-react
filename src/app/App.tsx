import '@/app/config/i18n/i18n'
import '@/app/styles/globals.scss'
import { MainLayout } from '@/shared/components/layout/MainLayout'
import { TilesLayout } from '@/shared/components/layout/tiles-layout/TilesLayout'

export default function App() {
	return (
		<div className='app'>
			<MainLayout>
				<TilesLayout />
			</MainLayout>
		</div>
	)
}
