import { Logo } from '@/shared/components/icons/Logo'
import styles from './Footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__logo']}>
				<Logo />
			</div>

			<p>
				&copy; 2025 <span>Nekithrill</span>.
			</p>
		</footer>
	)
}
