import CalculatorWindow from './CalculatorWindow'
import CalculatorBody from './CalculatorBody'
import styles from './CalculatorBox.module.css'

const CalculatorBox = () => {

	const getValuesHandler = ({ firstValue, secondValue, operator, endValue }) => {
		console.log(firstValue, secondValue, operator, endValue)
	}
	
	return (
		<div className={styles.box}>
			<CalculatorWindow />
			<CalculatorBody onValues={getValuesHandler} />
		</div>
	)
}

export default CalculatorBox
