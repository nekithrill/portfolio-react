import { ReactNode } from 'react'

export interface IconWrapperProps {
	children: ReactNode
	className?: string
	size?: number
	color?: string
	isActive?: boolean
}

export type IconProps = {
	svgClassName?: string
	isActive?: boolean
}
