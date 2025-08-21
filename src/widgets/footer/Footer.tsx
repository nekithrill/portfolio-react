import styles from './footer.module.scss'

export const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__content']}>
				<div className={styles['footer__copyright']}>
					<p>
						&copy; 2025 <span>Nekithrill</span>.
					</p>
				</div>

				<div className={styles['footer__hint']}>
					<p>
						<span>Scroll </span>
						<span>to explore ⟶</span>
					</p>
				</div>
			</div>
		</footer>
	)
}
