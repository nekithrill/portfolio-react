import { CSSProperties } from 'react'
import styles from './Background.module.scss'
import { BackgroundProps } from './Background.types'

export const Background = ({
	cellSize = 50,
	lineColor = '',
	speed = 10
}: BackgroundProps) => {
	return (
		<div
			className={styles['bg']}
			style={
				{
					'--cell-size': `${cellSize}px`,
					'--line-color': lineColor,
					'--animation-speed': `${speed}s`
				} as CSSProperties
			}
		></div>
	)
}
