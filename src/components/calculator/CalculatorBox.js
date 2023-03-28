import CalculatorWindow from './CalculatorWindow'
import CalculatorBody from './CalculatorBody'
import styles from './CalculatorBox.module.css'
import { useCallback, useState } from 'react'

const CalculatorBox = () => {
	const [values, setValues] = useState({})

	const getValuesHandler = useCallback((upperValue, lowerValue) => setValues({ upperValue, lowerValue }), [])

	return (
		<div className={styles.box}>
			<CalculatorWindow setVal={values} />
			<CalculatorBody onValues={getValuesHandler} />
		</div>
	)
}

export default CalculatorBox
