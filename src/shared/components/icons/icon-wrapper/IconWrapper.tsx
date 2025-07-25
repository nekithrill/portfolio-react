import React from 'react'
import styles from './IconWrapper.module.scss'
import { IconWrapperProps } from './IconWrapper.types'

export const IconWrapper: React.FC<IconWrapperProps> = ({
	children,
	className = '',
	size = 24,
	color = 'currentColor'
}) => (
	<div
		className={`${styles['icon-wrapper']} ${className}`.trim()}
		style={{ width: size, height: size, color }}
	>
		{children}
	</div>
)
