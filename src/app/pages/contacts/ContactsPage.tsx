import { ContactForm } from '@/features/contact-form/ContactForm'
import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import { contactsData } from './ContactsData'
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

				<ul className={styles['contacts__socials']}>
					{contactsData.map(({ name, url, icon: Icon }) => (
						<li key={name} className={styles['item']}>
							<a
								href={url}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={name}
							>
								<IconWrapper width={40} height={40}>
									<Icon />
								</IconWrapper>
							</a>
						</li>
					))}
				</ul>
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
