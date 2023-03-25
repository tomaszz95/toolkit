import WeatherForm from './WeatherForm'
import WeatherData from './WeatherData'
import styles from './WeatherContainer.module.css'

const WeatherContainer = () => {
	return (
		<div className={styles.card}>
			<WeatherForm />
			<WeatherData />
		</div>
	)
}

export default WeatherContainer
