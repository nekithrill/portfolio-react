import { IconProps } from './icon-wrapper/IconWrapper.types'

export const FileIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 16 16'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<g fill='currentColor'>
			<path d='M7 0H2v16h12V7H7V0Z' />
			<path d='M9 0v5h5L9 0Z' />
		</g>
	</svg>
)
