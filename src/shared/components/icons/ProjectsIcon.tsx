import { IconProps } from './icon-wrapper/IconWrapper.types'

export const ProjectsIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 256 256'
		width='100%'
		height='100%'
		fill='currentColor'
		className={`${svgClassName}`}
	>
		<path d='M215.995 71.998h-85.339l-27.739-20.805a16.074 16.074 0 0 0-9.578-3.195H39.995a16.016 16.016 0 0 0-16 16v136a16.016 16.016 0 0 0 16 16h176a16.016 16.016 0 0 0 16-16v-112a16.016 16.016 0 0 0-16-16Zm-176-8H93.34l21.326 16-21.342 16H39.995Z' />
	</svg>
)
