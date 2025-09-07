import { Sidebar } from '@/widgets/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.scss'

export function MainLayout() {
	return (
		<div className={styles['window']}>
			<Sidebar />
			<main className={styles['content']}>
				<Outlet />
			</main>
		</div>
	)
}
