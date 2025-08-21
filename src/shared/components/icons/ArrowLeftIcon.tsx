import { IconProps } from './icon-wrapper/IconWrapper.types'

export const ArrowLeftIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 32 32'
		width='100%'
		height='100%'
		fill='currentColor'
		className={`${svgClassName}`}
	>
		<path d='m26.025 14.496-14.286-.001 6.366-6.366L15.979 6 5.975 16.003 15.971 26l2.129-2.129-6.367-6.366h14.29z' />
	</svg>
)
