import styles from '@/app/pages/Page.module.scss'
import { FileItem } from '@/features/file-item/FileItem'
import { useTranslation } from 'react-i18next'

export function AboutPage() {
	const { t } = useTranslation()

	return (
		<div className={styles['about__page']}>
			<section className={styles['about__intro']}>
				<h2>{t('section.about.title')}</h2>
				<p>{t('section.about.text')}</p>
			</section>

			<section className={styles['about__cv']}>
				<FileItem
					fileName='CV_Nekithrill.pdf'
					fileUrl='/src/shared/assets/example.pdf'
				/>
			</section>
		</div>
	)
}
