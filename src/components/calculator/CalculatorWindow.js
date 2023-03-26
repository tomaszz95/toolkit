import styles from './CalculatorWindow.module.css'

const CalculatorWindow = () => {
	return (
		<div className={styles.display}>
			<span className={styles.prev}>13123</span>
			<span className={styles.act}>1231323</span>
		</div>
	)
}

export default CalculatorWindow
