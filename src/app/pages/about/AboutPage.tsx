import { FileContainer } from '@/features/file-container/FileContainer'
import { Card } from '@/shared/components/ui/card/Card'
import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import { aboutData } from './AboutData'
import styles from './AboutPage.module.scss'

export function AboutPage() {
	const { t } = useTranslation()
	const { cv, education } = aboutData

	return (
		<div className={styles['about']}>
			<Section
				useH1
				title='section.about.title'
				className={styles['about__intro']}
				footerInfo={
					<FileContainer fileName={cv.fileName} fileUrl={cv.fileUrl} />
				}
			>
				<p>{t('section.about.text.frontend')}</p>
				<p>{t('section.about.text.backend')}</p>
				<p>{t('section.about.text.learn')}</p>
			</Section>

			<Section
				title='section.about.education.title'
				className={styles['about__education']}
			>
				{education.map(({ place, years, degree, specialty }) => (
					<Card
						key={years}
						title={years}
						variant='education'
						content={
							<>
								<p>
									{t(`${degree}`)} - {t(`${specialty}`)}
								</p>
								<p>{t(`${place}`)}</p>
							</>
						}
					/>
				))}
			</Section>
		</div>
	)
}
