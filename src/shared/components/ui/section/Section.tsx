import { useTranslation } from 'react-i18next'
import styles from './Section.module.scss'
import { SectionProps } from './Section.types'

const Section = ({
	useH1 = false,
	title,
	children,
	className,
	footerInfo
}: SectionProps) => {
	const { t } = useTranslation()
	const TitleTag = useH1 ? 'h1' : 'h2'

	return (
		<section className={`${styles['section']} ${className || ''}`}>
			<header className={styles['section__header']}>
				<TitleTag className={styles['section__title']}>{t(title)}</TitleTag>
			</header>

			<div className={styles['section__content']}>{children}</div>

			{footerInfo && (
				<footer className={styles['section__footer']}>
					<span className={styles['section__footer-info']}>{footerInfo}</span>
				</footer>
			)}
		</section>
	)
}

export default Section
