import WeatherForm from './WeatherForm'
import WeatherData from './WeatherData'
import useApi from '../hooks/useApi'
import styles from './WeatherContainer.module.css'
import { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const WeatherContainer = () => {
	const { data, error, getApiData } = useApi()
	const { getValue } = useLocalStorage()
	const inputHandler = city => {
		getApiData(city)
	}

	useEffect(() => {
		const storageCity = getValue('weather')
		if (storageCity === null) {
			getApiData('London')
		} else {
			getApiData(storageCity)
		}
	}, [getApiData, getValue])

	return (
		<div className={styles.card}>
			<WeatherForm
				onInput={inputHandler}
				cityName={data.cityName}
				weatherId={data.cityWeatherID}
				timezoneSec={data.cityTimezoneSeconds}
				error={error}
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
