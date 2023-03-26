import styles from './CalculatorButton.module.css'

const CalculatorButton = ({ value, children, handleClick, isNum }) => {
	const clickHandle = () => {
		if (handleClick) {
			handleClick(value)
		}
	}

	return (
		<button className={`${styles.btn} ${isNum ? styles.darker : ''}`} onClick={clickHandle}>
			{children}
		</button>
	)
}

export default CalculatorButton
