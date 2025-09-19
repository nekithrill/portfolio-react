export type Level = 1 | 2 | 3 | 4

export interface ChipProps {
	name: string
	level: Level
	showMarker?: boolean
}

export interface LevelMarkerProps {
	level: Level
	size?: number
}
