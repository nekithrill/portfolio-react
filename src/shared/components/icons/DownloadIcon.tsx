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
			<path d='M15 16H1V9h2v5h10V9h2v7Z' />
			<path d='M12 6H9V0H7v6H4v1l4 4 4-4V6Z' />
		</g>
	</svg>
)
