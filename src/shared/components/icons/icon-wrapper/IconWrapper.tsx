import styles from './IconWrapper.module.scss'
import { IconWrapperProps } from './IconWrapper.types'

export function IconWrapper({
	children,
	width = 24,
	height = 24,
	color = 'currentColor'
}: IconWrapperProps) {
	return (
		<div
			className={styles['icon-wrapper']}
			style={{ width: width, height: height, color }}
		>
			{children}
		</div>
	)
}
