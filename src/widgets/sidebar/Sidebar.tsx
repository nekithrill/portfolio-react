import { Footer } from '../footer/Footer'
import { Header } from '../header/Header'
import Navbar from '../navbar/Navbar'
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
