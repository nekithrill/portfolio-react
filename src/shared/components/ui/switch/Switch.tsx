import styles from './Switch.module.scss'
import { SwitchProps } from './Switch.types'

export const Switch = ({ items }: SwitchProps) => {
	return (
		<div className={styles['switch']}>
			{items.map(item => {
				const isActive = item.isActive
				return (
					<button
						key={item.key}
						onClick={item.onClick}
						className={`${styles['switch__button']}${isActive ? ` ${styles['active']}` : ''}`}
						aria-label={item.ariaLabel ?? item.label}
						aria-pressed={isActive}
					>
						{item.icon ?? item.label}
					</button>
				)
			})}
		</div>
	)
}
