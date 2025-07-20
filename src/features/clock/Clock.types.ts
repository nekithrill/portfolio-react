export const UPDATE_INTERVAL = 1000

export const DATE_TIME_OPTIONS = {
	clock: {
		hour: '2-digit' as const,
		minute: '2-digit' as const,
		second: '2-digit' as const
	},
	date: {
		weekday: 'long' as const,
		year: 'numeric' as const,
		month: 'long' as const,
		day: 'numeric' as const
	}
}

export interface UseClockResult {
	time: string
	date: string
}
