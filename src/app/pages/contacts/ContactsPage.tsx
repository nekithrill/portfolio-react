import styles from '@/app/pages/Page.module.scss'
import { ContactForm } from '@/features/contact-form/ContactForm'
import { useTranslation } from 'react-i18next'

export function ContactsPage() {
	const { t } = useTranslation('')

	return (
		<>
			<div className={styles['contacts__page']}>
				<h2>{t('section.contacts.title')}</h2>
				<div className={styles['contacts__inner']}>
					<div className={styles['contacts__left']}>
						<p>{t('section.contacts.text')}</p>
					</div>

					<div className={styles['contacts__right']}>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	)
}
