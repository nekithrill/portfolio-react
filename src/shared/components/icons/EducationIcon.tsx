import { IconProps } from './icon-wrapper/IconWrapper.types'

export const EducationIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<g fill='curentColor'>
			<path d='m8 11 6-3v6h2V5L8 1 0 5v2l8 4Z' />
			<path d='M2 10.236V13l6 3 4-2v-2.764l-4 2-6-3Z' />
		</g>
	</svg>
)
