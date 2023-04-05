import styles from './FinancesTotalBox.module.css'

const FinancesTotalBox = ({ totalValues }) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Total Values</h3>
			<div className={styles.box}>
				<span className={styles.name}>
					<i className={`fa-solid fa-plus ${styles.icon}`} /> Total income
				</span>
				<span className={styles.income}>{totalValues.totalIncome}$</span>
			</div>
			<div className={styles.box}>
				<span className={styles.name}>
					<i className={`fa-solid fa-minus ${styles.icon}`} /> Total expenses
				</span>
				<span className={styles.expenses}>{totalValues.totalExpenses}$</span>
			</div>
			<div className={styles.box}>
				<span className={styles.name}>
					<i className={`fa-solid fa-wallet ${styles.icon}`} /> Balance
				</span>
				<span className={styles.balance}>{totalValues.balance}$</span>
			</div>
		</div>
	)
}

export default FinancesTotalBox
