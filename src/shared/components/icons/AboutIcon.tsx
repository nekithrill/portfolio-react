import { IconProps } from './icon-wrapper/IconWrapper.types'

export const AboutIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='-1.56 -1.56 15.12 15.12'
		width='100%'
		height='100%'
		className={`${svgClassName}`}
	>
		<g fill='currentColor'>
			<path d='M9.3 6.535C8.479 7.43 7.309 8 6 8s-2.478-.57-3.3-1.465C1.314 7.235.5 8.613.5 10.5V12h11v-1.5c0-1.887-.815-3.265-2.2-3.965z' />
			<circle cx='6' cy='3.5' r='3.5' />
		</g>
	</svg>
)
