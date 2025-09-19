import { FileContainer } from '@/features/file-container/FileContainer'
import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import styles from './AboutPage.module.scss'

export function AboutPage() {
	const { t } = useTranslation()

	return (
		<div className={styles['about']}>
			<Section
				useH1={true}
				title='section.about.title'
				className={styles['about__intro']}
				footerInfo={
					<FileContainer
						fileName='CV_Nekithrill.pdf'
						fileUrl='/src/shared/assets/example.pdf'
					/>
				}
			>
				<p>{t('section.about.text')}</p>
			</Section>

			<Section
				title='section.about.educationTitle'
				className={styles['about__education']}
			>
				<div className={styles['about__item']}>
					<h3>2017-2021 ЄПК ЗНУ</h3>
					<p>description</p>
				</div>
				<div className={styles['about__item']}>
					<h3>2021-2024 ЗНУ</h3>
					<p>description</p>
				</div>
			</Section>
		</div>
	)
}
