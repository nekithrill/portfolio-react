import { IconProps } from './icon-wrapper/IconWrapper.types'

export const LayoutVertIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<g fill='currentColor'>
			<path d='M3 4V0h4v4H3ZM3 6v4h4V6H3ZM9 6v4h4V6H9ZM9 0v4h4V0H9ZM3 16v-4h4v4H3ZM9 12v4h4v-4H9Z' />
		</g>
	</svg>
)
