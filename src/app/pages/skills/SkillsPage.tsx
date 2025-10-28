import { Chip } from '@/shared/components/ui/chip/Chip'
import { LevelMarker } from '@/shared/components/ui/chip/LevelMarker'
import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import { skillsData } from './SkillsData'
import styles from './SkillsPage.module.scss'

export function SkillsPage() {
	const { t } = useTranslation('')

	return (
		<div className={styles['skills']}>
			<Section
				useH1={true}
				title='section.skills.hard.title'
				className={styles['skills__hard']}
				footerInfo={
					<>
						<p>{t('section.skills.hard.level.note')}</p>
						<p>
							<LevelMarker level={1} />
							{t('section.skills.hard.level.beginner')}
						</p>
						<p>
							<LevelMarker level={2} />
							{t('section.skills.hard.level.intermediate')}
						</p>
						<p>
							<LevelMarker level={3} />
							{t('section.skills.hard.level.advanced')}
						</p>
					</>
				}
			>
				<div className={styles['inner__container']}>
					{skillsData.hardSkills.map(({ heading, items }) => (
						<div className={styles['inner__item']} key={heading}>
							<h2>{t(heading)}</h2>
							<div className={styles['inner__chips']}>
								{items.map(({ name, level }) => (
									<Chip key={name} name={name} level={level as 1 | 2 | 3} />
								))}
							</div>
						</div>
					))}
				</div>
			</Section>

			<Section
				title='section.skills.soft.title'
				className={styles['skills__soft']}
			>
				<ul>
					{skillsData.softSkills.map(skill => (
						<li key={skill}>{t(skill)}</li>
					))}
				</ul>
			</Section>

			<Section
				title='section.skills.principles'
				className={styles['skills__principles']}
			>
				<ul>
					{skillsData.principles.map(principle => (
						<li key={principle}>{t(principle)}</li>
					))}
				</ul>
			</Section>

			<Section
				title='section.skills.languages.title'
				className={styles['skills__languages']}
			>
				<ul>
					{skillsData.languages.map(lang => (
						<li key={lang.key} className={styles['skills__languages_item']}>
							{t(lang.key)}{' '}
							<Chip name={t(lang.level)} level={1} showMarker={false} />
						</li>
					))}
				</ul>
			</Section>
		</div>
	)
}
