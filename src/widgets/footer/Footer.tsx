import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__content']}>
				<p>&copy; 2025 Nekithrill. All rights reserved. </p>
				<div className={styles['footer__links']}>
					<a href='#'>Privacy</a>
					<a href='#'>Terms</a>
					<a href='#'>Cookie</a>
				</div>
			</div>
		</footer>
	)
}
