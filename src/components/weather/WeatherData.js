import styles from './WeatherData.module.css'
import WeatherDataItem from './WeatherDataItem'

const weatherDataArr = [
	{ name: 'Weather', value: 'Clouds' },
	{ name: 'Temperature', value: '14°C' },
	{ name: 'Pressure', value: '1004 hPa' },
	{ name: 'Humidity', value: '54%' },
	{ name: 'Sunrise', value: '04:23:23' },
	{ name: 'Sunset', value: '18:23:23' },
	{ name: 'Wind', value: '9.3 m/s' },
]

const WeatherData = () => {
	return (
		<div className={styles.data}>
			{weatherDataArr.map(item => (
				<WeatherDataItem key={item.name} name={item.name} value={item.value} />
			))}
		</div>
	)
}

export default WeatherData
