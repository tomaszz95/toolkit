import styles from './WeatherDataItem.module.css'

const WeatherDataItem = ({ name, value }) => {
	return (
		<div className={styles.item}>
			<p className={styles.name}>{name}</p>
			{name === 'Wind' ? (
				<i className={`${styles.icon} fa-solid fa-up-long`} style={{ rotate: `${value[1]}deg` }}></i>
			) : null}
			{name === 'Wind' ? (
				<span className={styles.value}>{value[0]}</span>
			) : (
				<span className={styles.value}>{value}</span>
			)}
		</div>
	)
}

export default WeatherDataItem
