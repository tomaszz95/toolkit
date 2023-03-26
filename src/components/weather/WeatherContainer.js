import WeatherForm from './WeatherForm'
import WeatherData from './WeatherData'
import useApi from '../hooks/useApi'
import styles from './WeatherContainer.module.css'
import { useEffect, useState } from 'react'

const WeatherContainer = () => {
	const [inputError, setInputError] = useState('')
	const { data, error, getApiData } = useApi()

	const inputHandler = city => {
		getApiData(city)
	}

	useEffect(() => {
		getApiData('London')

		if (error !== '') {
			setInputError(error)
		}
	}, [getApiData, error])

	return (
		<div className={styles.card}>
			<WeatherForm
				onInput={inputHandler}
				cityName={data.cityName}
				weatherId={data.cityWeatherID}
				timezoneSec={data.cityTimezoneSeconds}
				error={inputError}
			/>
			<WeatherData
				cityWeather={data.cityWeatherDesc}
				cityTemp={data.cityTemp}
				cityPress={data.cityPress}
				cityHum={data.cityHum}
				citySunrise={data.citySunrise}
				citySunset={data.citySunset}
				cityWindSpeed={data.cityWindSpeed}
				cityWindDeg={data.cityWindDeg}
				cityTimezone={data.cityTimezoneSeconds}
			/>
		</div>
	)
}

export default WeatherContainer
