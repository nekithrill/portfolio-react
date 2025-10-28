import { IconProps } from './icon-wrapper/IconWrapper.types'

export const DownloadIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<g fill='currentColor'>
			<path d='M13 7h-3V0H6v7H3v1l5 5 5-5V7ZM14 14H2v2h12v-2Z' />
		</g>
	</svg>
)
