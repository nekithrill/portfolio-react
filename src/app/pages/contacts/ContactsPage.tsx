import { ContactForm } from '@/features/contact-form/ContactForm'
import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import styles from './ContactsPage.module.scss'

export function ContactsPage() {
	const { t } = useTranslation('')

	return (
		<div className={styles['contacts']}>
			<Section
				useH1={true}
				title='section.contacts.title'
				className={styles['contacts__text']}
			>
				<p>{t('section.contacts.text')}</p>
			</Section>

			<Section
				title='section.contacts.form.title'
				className={styles['contacts__form']}
			>
				<ContactForm />
			</Section>
		</div>
	)
}
