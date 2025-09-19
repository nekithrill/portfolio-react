import { useTranslation } from 'react-i18next'
import styles from './PrivacyPage.module.scss'

export function PrivacyPage() {
	const { t } = useTranslation('')

	return (
		<>
			<div className={styles['privacy__page']}>
				<section>
					<h1>{t('section.privacy.title')}</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, rerum eaque fuga voluptas placeat doloribus.
					</p>
				</section>
			</div>
		</>
	)
}
