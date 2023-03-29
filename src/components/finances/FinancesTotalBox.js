import styles from './FinancesTotalBox.module.css'

const FinancesTotalBox = () => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Total Values</h3>
			<div className={styles.box}>
				<span className={styles.name}>
					<i className={`fa-solid fa-plus ${styles.icon}`} /> Total income
				</span>
				<span className={styles.income}>233223</span>
			</div>
			<div className={styles.box}>
				<span className={styles.name}>
					<i className={`fa-solid fa-minus ${styles.icon}`} /> Total expenses
				</span>
				<span className={styles.expenses}>22222</span>
			</div>
			<div className={styles.box}>
				<span className={styles.name}>
					<i className={`fa-solid fa-wallet ${styles.icon}`} /> Balance
				</span>
				<span className={styles.balance}>1111</span>
			</div>
		</div>
	)
}

export default FinancesTotalBox
