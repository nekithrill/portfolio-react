import { IconProps } from './icon-wrapper/IconWrapper.types'

export const HomeIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='-76.8 -76.8 665.6 665.6'
		width='100%'
		height='100%'
		fill='currentColor'
		className={`${svgClassName}`}
	>
		<path d='m500.284 227.716-216-216c-15.621-15.621-40.948-15.621-56.568 0l-216 216c-15.621 15.621-15.621 40.948 0 56.568C23.69 296.258 41.363 299.042 56 292.659V452c0 33.137 26.863 60 60 60h280c33.137 0 60-26.863 60-60V292.659c14.637 6.383 32.31 3.599 44.284-8.375 15.621-15.621 15.621-40.947 0-56.568zM326 432c0 11.046-8.954 20-20 20H206c-11.046 0-20-8.954-20-20V312c0-11.046 8.954-20 20-20h100c11.046 0 20 8.954 20 20v120z' />
	</svg>
)
