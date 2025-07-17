import useClock from '@/features/digital-clock/useClock'
import styles from './digital-clock.module.scss'

export const DigitalClock = () => {
	const { time, date } = useClock()

	return (
		<div className={styles['clock']}>
			<div className={styles['clock__time']}>{time}</div>
			<div className={styles['clock__date']}>{date}</div>
		</div>
	)
}
