import styles from './WeatherForm.module.css'
import useApi from '../hooks/useApi'
import { useEffect, useState } from 'react'

const WeatherForm = () => {
	const [inputError, setInputError] = useState('')
	const { data, error, getApiData } = useApi()

	useEffect(() => {
		getApiData('London')

		if (error !== '') {
			setInputError(error)
		}
	}, [getApiData, error])

	const inputHandler = e => {
		if (e.key === 'Enter' && e.target.value.trim() !== '') {
			const city = e.target.value.trim()
			getApiData(city)
			e.target.value = ''
			setInputError('')
		} else if (e.key === 'Enter' && e.target.value.trim() === '') {
			setInputError('Please enter a valid city name!')
		}
	}

	return (
		<div className={styles.box}>
			<label htmlFor='city' className={styles.label}>
				{data.cityName}
			</label>
			<img src='./assets/unknown.png' alt='' className={styles.img} />
			<input type='text' id='city' placeholder='Enter city name..' className={styles.input} onKeyDown={inputHandler} />
			<p className={styles.error}>{inputError}</p>
			<p className={styles.timer}>12:22:23</p>
		</div>
	)
}

export default WeatherForm
