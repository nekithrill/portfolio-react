import { Footer } from '@/widgets/footer/Footer'
import { Header } from '@/widgets/header/Header'
import { Navbar } from '@/widgets/navbar/Navbar'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
	return (
		<aside className={styles['sidebar']}>
			<Header />
			<Navbar />
			<Footer />
		</aside>
	)
}
