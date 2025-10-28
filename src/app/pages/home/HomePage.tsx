import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import { homeData } from './HomeData'
import styles from './HomePage.module.scss'

export function HomePage() {
	const { t } = useTranslation()

	return (
		<div className={styles['home']}>
			{homeData.map((section, index) => (
				<Section
					key={index}
					useH1={section.useH1}
					title={section.title}
					className={styles[section.className]}
				>
					<p>{t(section.text)}</p>
				</Section>
			))}
		</div>
	)
}
