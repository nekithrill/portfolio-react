import styles from './Card.module.scss'
import { CardProps } from './Card.types'

export const Card = ({
	title,
	content,
	footer,
	icon,
	variant = 'default',
	className
}: CardProps) => {
	return (
		<div
			className={`${styles['card']} ${styles[`card--${variant}`]} ${className || ''}`}
		>
			<header className={styles['card__header']}>
				{icon && <div className={styles['card__icon']}>{icon}</div>}
				<h3 className={styles['card__title']}>{title}</h3>
			</header>

			<div className={styles['card__content']}>{content}</div>

			{footer && <footer className={styles['card__footer']}>{footer}</footer>}
		</div>
	)
}
