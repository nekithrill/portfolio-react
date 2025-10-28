import { ReactNode } from 'react'

export type SwitchItem = {
	key: string
	isActive: boolean
	onClick: () => void
	label?: string
	icon?: ReactNode
	ariaLabel?: string
}

export type SwitchProps = {
	items: SwitchItem[]
}
