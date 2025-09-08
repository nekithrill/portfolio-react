import { IconProps } from './icon-wrapper/IconWrapper.types'

export const HomeIcon = ({ svgClassName }: IconProps) => (
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
			d='M8 0 0 6v2h1v7h3v-5h3v5h8V8h1V6l-2-1.5V1h-3v1.25L8 0Zm1 10h3v3H9v-3Z'
		/>
	</svg>
)
