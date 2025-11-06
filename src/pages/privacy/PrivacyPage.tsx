import { Card } from '@/shared/components/ui/card/Card'
import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import styles from './PrivacyPage.module.scss'

export function PrivacyPage() {
	const { t } = useTranslation('')

	return (
		<>
			<div className={styles['privacy']}>
				<Section
					useH1={true}
					title='section.privacy.title'
					contentClassName={styles['privacy__section']}
				>
					<p>{t('section.privacy.intro')}</p>

					<Card
						variant='default'
						title='section.privacy.sourcesTitle'
						content={
							<>
								<p>{t('section.privacy.sourcesText')}</p>
								<p>{t('section.privacy.icons')}</p>
								<p>{t('section.privacy.fonts')}</p>
							</>
						}
					></Card>
					<Card
						title='section.privacy.privacyTitle'
						variant='default'
						content={<></>}
					></Card>
				</Section>
			</div>
		</>
	)
}
