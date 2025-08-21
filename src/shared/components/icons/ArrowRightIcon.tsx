import { IconProps } from './icon-wrapper/IconWrapper.types'

export const ArrowRightIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 0 32 32'
		width='100%'
		height='100%'
		fill='currentColor'
		className={`${svgClassName}`}
	>
		<path d='m5.975 17.504 14.287.001-6.367 6.366L16.021 26l10.004-10.003L16.029 6l-2.128 2.129 6.367 6.366H5.977z' />
	</svg>
)
