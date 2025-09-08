import { IconProps } from './icon-wrapper/IconWrapper.types'

export const SunIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<g fill='currentColor'>
			<path d='M7 3V0h2v3H7ZM9 13v3H7v-3h2ZM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM0 9h3V7H0v2ZM16 7h-3v2h3V7ZM3.757 5.172 1.636 3.05 3.05 1.636l2.122 2.121-1.415 1.415ZM12.243 10.828l2.121 2.122-1.414 1.414-2.122-2.121 1.415-1.415ZM3.05 14.364l2.122-2.121-1.415-1.415-2.121 2.122 1.414 1.414ZM12.95 1.636l-2.122 2.121 1.415 1.415 2.121-2.122-1.414-1.414Z' />
		</g>
	</svg>
)
