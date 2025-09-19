import { ReactNode } from 'react'

export interface IconWrapperProps {
	children: ReactNode
	size: number
	className?: string
	color?: string
}

export type IconProps = {
	svgClassName?: string
}
