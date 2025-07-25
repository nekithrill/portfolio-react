import { IconProps } from './icon-wrapper/IconWrapper.types'

export const EducationIcon = ({ svgClassName }: IconProps) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		viewBox='0 -3 24 24'
		width='100%'
		height='100%'
		fill='none'
		className={`${svgClassName}`}
	>
		<path
			fill='currentColor'
			fillRule='evenodd'
			clipRule='evenodd'
			d='M3.417 6 12 9.902 20.583 6 12 2.098 3.417 6zM0 6c0-.366.195-.733.586-.91L11.172.278a2 2 0 0 1 1.656 0L23.414 5.09c.781.355.781 1.465 0 1.82L20 8.462v4.262a2 2 0 0 1-.305 1.062C18.143 16.263 15.533 17.5 12 17.5c-3.533 0-6.143-1.237-7.695-3.714A2 2 0 0 1 4 12.724V8.462l-2-.91V10.5a1 1 0 1 1-2 0V6zM18 9.37l-5.172 2.351a2 2 0 0 1-1.656 0L6 9.372v3.352c1.159 1.85 3.114 2.776 6 2.776s4.841-.927 6-2.776V9.371z'
		/>
	</svg>
)
