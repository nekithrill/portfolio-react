import { ReactNode } from 'react'

export interface IconWrapperProps {
	children: ReactNode
	className?: string
	color?: string
	size: number
}

export type IconProps = {
	svgClassName?: string
}
