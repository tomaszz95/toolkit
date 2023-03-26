import styles from './WeatherData.module.css'
import WeatherDataItem from './WeatherDataItem'
import { useEffect, useState } from 'react'
import useWeather from '../hooks/useWeather'

const WeatherData = ({
	cityWeather,
	cityTemp,
	cityPress,
	cityHum,
	citySunrise,
	citySunset,
	cityWindSpeed,
	cityWindDeg,
	cityTimezone,
}) => {
	const [weatherArr, setWeatherArr] = useState([])
	const { setSunriseAndSunset } = useWeather()

	const { sunriseH, sunsetH } = setSunriseAndSunset(citySunrise, citySunset, cityTimezone)

	useEffect(() => {
		setWeatherArr([
			{ name: 'Weather', value: cityWeather },
			{ name: 'Temperature', value: `${cityTemp}°C` },
			{ name: 'Pressure', value: `${cityPress} hPa` },
			{ name: 'Humidity', value: `${cityHum}%` },
			{ name: 'Sunrise', value: sunriseH },
			{ name: 'Sunset', value: sunsetH },
			{ name: 'Wind', value: [`${cityWindSpeed} m/s`, cityWindDeg] },
		])
	}, [cityWeather, cityTemp, cityPress, cityHum, sunriseH, sunsetH, cityWindSpeed, cityWindDeg])
	return (
		<div className={styles.data}>
			{weatherArr.map(item => (
				<WeatherDataItem key={item.name} name={item.name} value={item.value} />
			))}
		</div>
	)
}

export default WeatherData
