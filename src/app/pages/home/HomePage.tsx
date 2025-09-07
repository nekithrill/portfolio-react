import styles from '@/app/pages/Page.module.scss'
// import { useTranslation } from 'react-i18next'

export function HomePage() {
	// const { t } = useTranslation()

	return (
		<>
			<div className={styles['home__page']}>
				<h1>Hello there!</h1>
			</div>
		</>
	)
}
