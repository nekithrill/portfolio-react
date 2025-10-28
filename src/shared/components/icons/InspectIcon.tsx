import { IconProps } from './icon-wrapper/IconWrapper.types'

export const InspectIcon = ({ svgClassName }: IconProps) => (
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
			fillRule='evenodd'
			clipRule='evenodd'
			d='M11.192 12.606a7 7 0 1 1 1.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1ZM5.586 8.414 4.172 9.828a4 4 0 0 1 5.656-5.656L8.414 5.586a2 2 0 1 0-2.828 2.828Z'
		/>
	</svg>
)
