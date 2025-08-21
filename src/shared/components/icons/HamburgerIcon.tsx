import { IconProps } from './icon-wrapper/IconWrapper.types'

export const HamburgerIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 32 32'
		fill='currentColor'
		width='100%'
		height='100%'
		className={`${svgClassName}`}
	>
		<path d='M6.001 7.128 6 10.438l19.998-.005L26 7.124zm0 14.438L6 24.876l19.998-.006.002-3.308zm0-7.225L6 17.65l19.998-.004.002-3.309z' />
	</svg>
)
