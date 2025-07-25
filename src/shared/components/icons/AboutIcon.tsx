import { IconProps } from './icon-wrapper/IconWrapper.types'

export const AboutIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 24 24'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			clipRule='evenodd'
			d='M3 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3ZM0 6a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V6Zm6 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm4.176 2.257a3.5 3.5 0 1 0-5.351 0C3.681 13.498 3 14.707 3 16a1 1 0 1 0 2 0c0-.886.8-2 2.5-2s2.5 1.114 2.5 2a1 1 0 1 0 2 0c0-1.293-.682-2.5-1.824-3.243ZM13 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm1 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-4Z'
		/>
	</svg>
)
