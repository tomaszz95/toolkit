import styles from './WeatherDataItem.module.css'

const WeatherDataItem = ({ name, value }) => {
	return (
		<div className={styles.item}>
			<p className={styles.name}>{name}</p>
			{name === 'Wind' ? <i className={`${styles.icon} fa-solid fa-up-long`}></i> : null}
			<span className={styles.value}>{value}</span>
		</div>
	)
}

export default WeatherDataItem
