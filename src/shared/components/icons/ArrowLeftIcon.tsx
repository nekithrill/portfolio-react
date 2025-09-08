import { IconProps } from './icon-wrapper/IconWrapper.types'

export const ArrowLeftIcon = ({ svgClassName }: IconProps) => (
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
			d='M8.172 8 3.586 3.414 6.414.586 13.83 8l-7.415 7.414-2.828-2.828L8.172 8Z'
		/>
	</svg>
)
