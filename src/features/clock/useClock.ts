import type { UseClockResult } from '@/shared/types/time'
import { DATE_TIME_OPTIONS, UPDATE_INTERVAL } from '@/shared/types/time'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function useClock(): UseClockResult {
	const [now, setNow] = useState(new Date())
	const { i18n } = useTranslation()

	useEffect(() => {
		const intervalId = setInterval(() => {
			setNow(new Date())
		}, UPDATE_INTERVAL)

		return () => clearInterval(intervalId)
	}, [])

	const time = new Intl.DateTimeFormat(
		i18n.language,
		DATE_TIME_OPTIONS.clock
	).format(now)
	const date = new Intl.DateTimeFormat(
		i18n.language,
		DATE_TIME_OPTIONS.date
	).format(now)

	return { time, date }
}
