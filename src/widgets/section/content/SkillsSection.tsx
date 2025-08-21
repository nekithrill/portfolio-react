import styles from '@/widgets/section/Section.module.scss'
import { useTranslation } from 'react-i18next'

const hardSkillsKeys = [
	{
		heading: 'section.skills.hard.programmingLanguages',
		items: ['JavaScript', 'TypeScript']
	},
	{
		heading: 'Frontend',
		items: ['HTML', 'CSS', 'SCSS', 'React', 'Next.js', 'Redux', 'Zustand']
	},
	{ heading: 'Backend', items: ['Node.js', 'Express.js'] },
	{
		heading: 'section.skills.hard.other',
		items: ['Vite', 'Webpack', 'Docker', 'Git']
	}
]

const softSkillsKeys = [
	'section.skills.soft.communication',
	'section.skills.soft.problemSolving',
	'section.skills.soft.adaptability',
	'section.skills.soft.teamwork',
	'section.skills.soft.creativity',
	'section.skills.soft.enthusiasm'
]

const principles = ['SOLID', 'DRY', 'KISS', 'YAGNI']

const languagesKeys = [
	'section.skills.languages.english',
	'section.skills.languages.ukrainian',
	'section.skills.languages.russian'
]

export function SkillsSection() {
	const { t } = useTranslation('')

	return (
		<>
			<div className={styles['skills__content']}>
				<div className={styles['skills__hard']}>
					<h2>{t('section.skills.heading')}</h2>
					{hardSkillsKeys.map(({ heading, items }) => (
						<div key={heading}>
							<h3>{t(heading)}</h3>
							<p>{items.join(', ')}</p>
						</div>
					))}
				</div>

				<div className={styles['skills__soft']}>
					<h2>{t('section.skills.soft.title')}</h2>
					<ul>
						{softSkillsKeys.map(skill => (
							<li key={skill}>{t(skill)}</li>
						))}
					</ul>
				</div>

				<div className={styles['skills__principles']}>
					<h2>{t('section.skills.principles')}</h2>
					<ul>
						{principles.map(principle => (
							<li key={principle}>{t(principle)}</li>
						))}
					</ul>
				</div>

				<div className={styles['skills__languages']}>
					<h2>{t('section.skills.languages.title')}</h2>
					<ul>
						{languagesKeys.map(language => (
							<li key={language}>{t(language)}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}
