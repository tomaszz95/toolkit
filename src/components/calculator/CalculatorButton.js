import styles from './CalculatorButton.module.css'

const CalculatorButton = ({ value, children, handleBtnValue, isNum }) => {
	return (
		<button
			value={value}
			className={`${styles.btn} ${isNum ? styles.darker : ''}`}
			onClick={e => handleBtnValue(e.target.value)}>
			{children}
		</button>
	)
}

export default CalculatorButton
