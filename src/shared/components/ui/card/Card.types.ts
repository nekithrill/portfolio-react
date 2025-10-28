import { ReactNode } from 'react'

export interface CardProps {
	title: ReactNode
	content: ReactNode
	footer?: ReactNode
	icon?: ReactNode
	variant?: 'default' | 'project' | 'education'
	className?: string
}
