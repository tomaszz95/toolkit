import styles from './CalculatorWindow.module.css'

const CalculatorWindow = ({ setVal }) => {
	return (
		<div className={styles.display}>
			<span className={styles.prev}>{setVal.upperValue}</span>
			<span className={styles.act}>{setVal.lowerValue}</span>
		</div>
	)
}

export default CalculatorWindow
