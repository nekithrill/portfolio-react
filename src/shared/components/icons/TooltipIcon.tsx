import { IconProps } from './icon-wrapper/IconWrapper.types'

export const TooltipIcon = ({ svgClassName }: IconProps) => (
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
			d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM8 5a1.5 1.5 0 0 0-1.5 1.5V7h-2v-.5A3.5 3.5 0 1 1 8 10H7V8h1a1.5 1.5 0 1 0 0-3Zm1 6v2H7v-2h2Z'
		/>
	</svg>
)
