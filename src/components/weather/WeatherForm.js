import styles from './WeatherForm.module.css'
import useWeather from '../hooks/useWeather'
import { useEffect, useState } from 'react'

const WeatherForm = ({ onInput, error, cityName, weatherId, timezoneSec }) => {
	const [inputError, setInputError] = useState('')
	const [timeInCity, setTimeInCity] = useState('')
	const { setProperIcon, setProperLabel, setProperTimer } = useWeather()

	const inputHandler = e => {
		if (e.key === 'Enter' && e.target.value.trim() !== '') {
			const city = e.target.value.trim()
			onInput(city)
			e.target.value = ''
			setInputError('')
		} else if (e.key === 'Enter' && e.target.value.trim() === '') {
			setInputError('Please enter a valid city name!')
		}
	}

	useEffect(() => {
		if (error !== undefined) {
			setInputError(error)
		}
	}, [error])

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
			<p className={styles.error}>{inputError}</p>
			<p className={styles.timer}>{timeInCity}</p>
		</div>
	)
}

export default WeatherForm
