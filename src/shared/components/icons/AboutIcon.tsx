import { IconProps } from './icon-wrapper/IconWrapper.types'

export const AboutIcon = ({ svgClassName }: IconProps) => (
	// <svg
	// 	xmlns='http://www.w3.org/2000/svg'
	// 	viewBox='-1.56 -1.56 15.12 15.12'
	// 	width='100%'
	// 	height='100%'
	// 	className={`${svgClassName}`}
	// >
	// 	<g fill='currentColor'>
	// 		<path d='M9.3 6.535C8.479 7.43 7.309 8 6 8s-2.478-.57-3.3-1.465C1.314 7.235.5 8.613.5 10.5V12h11v-1.5c0-1.887-.815-3.265-2.2-3.965z' />
	// 		<circle cx='6' cy='3.5' r='3.5' />
	// 	</g>
	// </svg>

	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<g fill='currentColor'>
			<path d='M8 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm-2-6a3 3 0 0 0-2.712 1.715 6 6 0 1 1 9.423 0A3 3 0 0 0 10 10H6Z'
			/>
		</g>
	</svg>
)
