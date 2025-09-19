import { ReactNode } from 'react'

export interface SectionProps {
	useH1?: boolean
	title: string
	children: ReactNode
	className?: string
	footerInfo?: ReactNode
}
