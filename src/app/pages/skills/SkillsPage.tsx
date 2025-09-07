import styles from '@/app/pages/Page.module.scss'
import { useTranslation } from 'react-i18next'
import { skillsData } from '../Pages.data'

export function SkillsPage() {
	const { t } = useTranslation('')

	return (
		<div className={styles.skills__page}>
			<section className={styles.skills__hard}>
				<h2>{t('section.skills.heading')}</h2>
				<div className={styles.inner__container}>
					{skillsData.hardSkills.map(({ heading, items }) => (
						<div className={styles.inner__item} key={heading}>
							<h3>{t(heading)}</h3>
							<p>{items.join(', ')}</p>
						</div>
					))}
				</div>
			</section>

			<section className={styles.skills__soft}>
				<h2>{t('section.skills.soft.title')}</h2>
				<ul>
					{skillsData.softSkills.map(skill => (
						<li key={skill}>{t(skill)}</li>
					))}
				</ul>
			</section>

			<section className={styles.skills__principles}>
				<h2>{t('section.skills.principles')}</h2>
				<ul>
					{skillsData.principles.map(principle => (
						<li key={principle}>{t(principle)}</li>
					))}
				</ul>
			</section>

			<section className={styles.skills__languages}>
				<h2>{t('section.skills.languages.title')}</h2>
				<ul>
					{skillsData.languages.map(language => (
						<li key={language}>{t(language)}</li>
					))}
				</ul>
			</section>
		</div>
	)
}
