import { IconProps } from './icon-wrapper/IconWrapper.types'

export const ProjectsIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<path fill='currentColor' d='M0 1h6l3 3h7v10H0V1Z' />
	</svg>
)
