import { IconProps } from './icon-wrapper/IconWrapper.types'

export const InspectIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 25 25'
		fill='none'
		width='100%'
		height='100%'
		className={`${svgClassName}`}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			clipRule='evenodd'
			d='M5.205 12.5c1.458 2.294 3.752 4.4 7.295 4.4s5.837-2.106 7.295-4.4c-1.458-2.294-3.752-4.4-7.295-4.4s-5.837 2.106-7.295 4.4Zm-1.22-.309C5.54 9.601 8.203 6.9 12.5 6.9c4.298 0 6.96 2.7 8.515 5.291l.185.309-.185.309C19.46 15.399 16.798 18.1 12.5 18.1c-4.298 0-6.96-2.7-8.514-5.291L3.8 12.5l.186-.309ZM12.5 9.4a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z'
		/>
	</svg>
)
