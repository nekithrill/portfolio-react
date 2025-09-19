import { IconProps } from './icon-wrapper/IconWrapper.types'

export const SystemIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			clipRule='evenodd'
			d='M0 2h16v10h-6v1l2 2v1H4v-1l2-2v-1H0V2Zm2 2h12v6H2V4Z'
		/>
	</svg>
)
