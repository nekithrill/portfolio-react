import { IconWrapper } from '@/shared/components/icons/icon-wrapper/IconWrapper'
import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import { contactsData } from './ContactsData'
import styles from './ContactsPage.module.scss'

export function ContactsPage() {
	const { t } = useTranslation('')
	const { icons } = contactsData

	return (
		<div className={styles['contacts']}>
			<Section
				useH1={true}
				title='section.contacts.title'
				className={styles['contacts__text']}
				footerInfo={
					<ul className={styles['contacts__socials']}>
						{icons.map(({ name, url, icon: Icon }) => (
							<li key={name} className={styles['item']}>
								<a
									href={url}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={name}
								>
									<IconWrapper width={48} height={32}>
										<Icon />
									</IconWrapper>
								</a>
							</li>
						))}
					</ul>
				}
			>
				<p>{t('section.contacts.text')}</p>
			</Section>
		</div>
	)
}
