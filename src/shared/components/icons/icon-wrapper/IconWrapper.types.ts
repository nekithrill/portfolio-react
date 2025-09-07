import { ReactNode } from 'react'

export interface IconWrapperProps {
	children: ReactNode
	className?: string
	size?: number
	color?: string
}

export type IconProps = {
	svgClassName?: string
}
