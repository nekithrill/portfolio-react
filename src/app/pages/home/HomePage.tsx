import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import styles from './HomePage.module.scss'

export function HomePage() {
	const { t } = useTranslation()

	return (
		<>
			<div className={styles['home']}>
				<Section
					useH1={true}
					title='section.home.title'
					className={styles['home__intro']}
				>
					<p>{t('section.home.text')}</p>
				</Section>
			</div>
		</>
	)
}
