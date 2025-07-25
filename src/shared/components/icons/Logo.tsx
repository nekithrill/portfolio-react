import logo from '@/shared/assets/logo.svg'
import styles from '@/widgets/header/Header.module.scss'

export const Logo = () => (
	<img src={logo} className={styles['logo']} alt='Logo' />
)
