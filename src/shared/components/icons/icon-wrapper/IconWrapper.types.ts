import { ReactNode } from 'react'

export interface IconWrapperProps {
	children: ReactNode
	width: number
	height: number
	className?: string
	color?: string
}

export type IconProps = {
	svgClassName?: string
}
