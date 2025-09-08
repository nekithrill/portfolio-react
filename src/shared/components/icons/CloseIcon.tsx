import { IconProps } from './icon-wrapper/IconWrapper.types'

export const CloseIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<path
			fill='currentColor'
			d='M5.172 8 1.086 3.914l2.828-2.828L8 5.172l4.086-4.086 2.828 2.828L10.83 8l4.085 4.086-2.828 2.828L8 10.83l-4.086 4.085-2.828-2.828L5.172 8Z'
		/>
	</svg>
)
