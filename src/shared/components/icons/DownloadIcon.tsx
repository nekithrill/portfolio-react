import { IconProps } from './icon-wrapper/IconWrapper.types'

export const DownloadIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		fill='none'
		viewBox='0 0 25 25'
		width='100%'
		height='100%'
		className={`${svgClassName}`}
	>
		<path
			stroke='currentColor'
			strokeWidth='1.2'
			d='M19.5 17v2.5h-14V17m12-6-5 5-5-5m5 5V5'
		/>
	</svg>
)
