import { IconProps } from './icon-wrapper/IconWrapper.types'

export const MoonIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<g fill='currentColor'>
			<path d='M0 8A8.002 8.002 0 0 1 4.707.707l.947.947a6.5 6.5 0 0 0 8.691 8.691l.948.948A8.002 8.002 0 0 1 0 8Z' />
		</g>
	</svg>
)
