import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const UPDATE_INTERVAL = 1000

export default function useClock() {
	const [time, setTime] = useState('')
	const [date, setDate] = useState('')
	const { i18n } = useTranslation()

	const options = {
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

	useEffect(() => {
		const updateClockAndDate = () => {
			const nowDate = new Date()
			setTime(
				new Intl.DateTimeFormat(i18n.language, options.clock).format(nowDate)
			)
			setDate(
				new Intl.DateTimeFormat(i18n.language, options.date).format(nowDate)
			)
		}

		updateClockAndDate()
		const intervalId = setInterval(updateClockAndDate, UPDATE_INTERVAL)

		return () => clearInterval(intervalId)
	}, [i18n.language])

	return { time, date }
}
