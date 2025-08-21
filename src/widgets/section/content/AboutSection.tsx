import styles from '@/widgets/section/Section.module.scss'
import { useTranslation } from 'react-i18next'

export function AboutSection() {
	const { t } = useTranslation('')

	return (
		<>
			<div className={styles['about__content']}>
				<h2>{t('section.about.title')}</h2>
				<p>
					{t('section.about.text')}
					Hello there, my name is Nikita, I am a junior frontend developer from
					Ukraine 🇺🇦 with experience in web-developing, equipped with a diverse
					and promising skill-set. Able to effectively self-manage various
					issues, as well as collaborate as part of a productive team. My main
					responsibility is to develop user-friendly systems following best
					practises. Proficient in various frameworks and libraries. I am always
					engaged in learning new skills.
				</p>

				<div className={styles['about__cv']}>
					<p>Тут будет сивишка</p>
				</div>
			</div>
		</>
	)
}
