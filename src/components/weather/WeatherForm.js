import styles from './WeatherForm.module.css'
import useWeather from '../hooks/useWeather'
import { useEffect, useState } from 'react'

const WeatherForm = ({ onInput, error, cityName, weatherId, timezoneSec }) => {
	const [timeInCity, setTimeInCity] = useState('')
	const { setProperIcon, setProperLabel, setProperTimer } = useWeather()

	const inputHandler = e => {
		if (e.key === 'Enter' && e.target.value.trim() !== '') {
			onInput(e.target.value.trim())
			e.target.value = ''
		}
	}

	const city = setProperLabel(cityName)
	const iconUrl = setProperIcon(weatherId)

	useEffect(() => {
		const currTime = setInterval(() => setTimeInCity(setProperTimer(timezoneSec)), 1000)

		return () => {
			clearInterval(currTime)
		}
	}, [setProperTimer, timezoneSec])

	return (
		<div className={styles.box}>
			<label htmlFor='city' className={styles.label}>
				{city}
			</label>
			<img src={iconUrl} alt='' className={styles.img} />
			<input type='text' id='city' placeholder='Enter city name..' className={styles.input} onKeyDown={inputHandler} />
			<p className={styles.error}>{error}</p>
			<p className={styles.timer}>{timeInCity}</p>
		</div>
	)
}

export default WeatherForm
