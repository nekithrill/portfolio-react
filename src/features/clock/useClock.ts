import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import type { UseClockResult } from './Clock.types'
import { DATE_TIME_OPTIONS, UPDATE_INTERVAL } from './Clock.types'

export default function useClock(): UseClockResult {
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')
	const { i18n } = useTranslation()

	useEffect(() => {
		const updateClockAndDate = () => {
			const nowDate = new Date()
			setTime(
				new Intl.DateTimeFormat(i18n.language, DATE_TIME_OPTIONS.clock).format(
					nowDate
				)
			)
			setDate(
				new Intl.DateTimeFormat(i18n.language, DATE_TIME_OPTIONS.date).format(
					nowDate
				)
			)
		}

		updateClockAndDate()
		const intervalId = setInterval(updateClockAndDate, UPDATE_INTERVAL)

		return () => clearInterval(intervalId)
	}, [i18n.language])

	return { time, date }
}
