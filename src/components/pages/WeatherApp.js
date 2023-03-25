import AppsTitle from '../layouts/AppsTitle'
import WeatherContainer from '../weather/WeatherContainer'
import styles from './WeatherApp.module.css'

const WeatherApp = () => {
	return (
		<section className={styles.weather}>
			<AppsTitle title='Weather App' />
			<WeatherContainer />
		</section>
	)
}

export default WeatherApp
