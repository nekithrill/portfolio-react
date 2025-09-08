import { IconProps } from './icon-wrapper/IconWrapper.types'

export const ContactsIcon = ({ svgClassName }: IconProps) => (
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
			d='M16 1H0v12h5l3 3 3-3h5V1ZM3 6h2v2H3V6Zm6 0H7v2h2V6Zm4 0h-2v2h2V6Z'
		/>
	</svg>
)
