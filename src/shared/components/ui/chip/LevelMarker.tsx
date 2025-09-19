import styles from './Chip.module.scss'
import { LevelMarkerProps } from './Chip.types'

export const LevelMarker = ({ level, size = 10 }: LevelMarkerProps) => {
	return (
		<span
			className={`${styles['chip__marker']} ${styles[`chip__marker--lvl${level}`]}`}
			style={{ width: size, height: size }}
		/>
	)
}
