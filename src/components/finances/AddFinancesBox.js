import styles from './AddFinancesBox.module.css'

const AddFinancesBox = () => {
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<button className={styles.button} aria-label='Add transaction'>
					Add transaction
				</button>
				<button className={styles.button} aria-label='Delete income'>
					Delete income
				</button>
				<button className={styles.button} aria-label='Delete expenses'>
					Delete expenses
				</button>
				<button className={styles.button} aria-label='Delete all income and expenses'>
					Delete all
				</button>
			</div>
		</div>
	)
}

export default AddFinancesBox
