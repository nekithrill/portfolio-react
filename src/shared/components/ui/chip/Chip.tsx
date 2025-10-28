import styles from './Chip.module.scss'
import { ChipProps } from './Chip.types'
import { LevelMarker } from './LevelMarker'

export const Chip = ({ name, level, showMarker = true }: ChipProps) => {
	return (
		<div className={`${styles.chip} ${styles[`chip--lvl${level}`]}`}>
			{showMarker && <LevelMarker level={level} />}
			{name}
		</div>
	)
}
