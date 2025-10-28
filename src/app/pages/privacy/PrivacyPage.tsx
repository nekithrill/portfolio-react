import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import styles from './PrivacyPage.module.scss'

export function PrivacyPage() {
	const { t } = useTranslation('')

	return (
		<>
			<div className={styles['privacy']}>
				<Section useH1={true} title='section.privacy.title'>
					<p>{t('section.privacy.privacyText')}</p>
					<p>{t('section.privacy.sourcesText')}</p>
				</Section>
			</div>
		</>
	)
}
