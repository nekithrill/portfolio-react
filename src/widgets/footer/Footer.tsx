import { Logo } from '@/shared/components/icons/Logo'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

export const Footer = () => {
	const { t } = useTranslation()

	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__logo']}>
				<Logo />
			</div>

			<div className={styles['footer__text']}>
				<Link to='/privacy'>{t('menu.privacy')}</Link>

				<p>
					&copy; 2025 <span>Nekithrill</span>.
				</p>
			</div>
		</footer>
	)
}
