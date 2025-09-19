import { IconProps } from './icon-wrapper/IconWrapper.types'

export const SkillsIcon = ({ svgClassName }: IconProps) => (
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
			d='M6.5 0h3l.594 2.375a5.993 5.993 0 0 1 1.728 1l2.356-.674 1.5 2.598-1.76 1.703a6.038 6.038 0 0 1 0 1.996l1.76 1.703-1.5 2.598-2.356-.674a5.993 5.993 0 0 1-1.728 1L9.5 16h-3l-.594-2.376a5.994 5.994 0 0 1-1.728-.999l-2.356.674-1.5-2.598 1.76-1.703a6.04 6.04 0 0 1 0-1.996L.323 5.299l1.5-2.598 2.356.674a5.994 5.994 0 0 1 1.728-1L6.5 0ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
		/>
	</svg>
)
