import { Card } from '@/shared/components/ui/card/Card'
import Section from '@/shared/components/ui/section/Section'
import { useTranslation } from 'react-i18next'
import { projectsData } from './ProjectsData'
import styles from './ProjectsPage.module.scss'

export function ProjectsPage() {
	const { t } = useTranslation('')

	return (
		<div className={styles['projects']}>
			<Section
				useH1
				title={t('section.projects.title')}
				className={styles['projects__grid']}
				contentClassName={styles['projects__content']}
			>
				{projectsData.map((project, index) => (
					<Card
						key={index}
						title={project.title}
						subtitle={project.subtitle}
						content={project.content}
						footer={project.footer}
						image={project.image}
						icon={project.icon}
						variant='project'
						className={styles['projects__card']}
					/>
				))}
			</Section>
		</div>
	)
}
