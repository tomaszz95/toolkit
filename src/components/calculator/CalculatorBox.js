import CalculatorWindow from './CalculatorWindow'
import CalculatorBody from './CalculatorBody'
import styles from './CalculatorBox.module.css'

const CalculatorBox = () => {
	return (
		<div className={styles.box}>
			<CalculatorWindow />
			<CalculatorBody />
		</div>
	)
}

export default CalculatorBox
