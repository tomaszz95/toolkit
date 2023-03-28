import CalculatorButton from './CalculatorButton'
import styles from './CalculatorBody.module.css'
import { useState, useEffect } from 'react'

const addNumbers = (num1, num2) => +num1 + +num2
const substractNumbers = (num1, num2) => +num1 - +num2
const multipNumbers = (num1, num2) => +num1 * +num2
const divideNumbers = (num1, num2) => +num1 / +num2

const CalculatorBody = ({ onValues }) => {
	const [firstValue, setFirstValue] = useState('')
	const [secondValue, setSecondValue] = useState('')
	const [finalValue, setFinalValue] = useState('')
	const [operator, setOperator] = useState('')
	let endValue

	useEffect(() => {
		let upperValue, lowerValue
		if (finalValue === '' && secondValue === '') {
			upperValue = secondValue
			lowerValue = `${firstValue} ${operator}`
		}
		if (finalValue === '' && firstValue !== '' && secondValue !== '' && operator !== '') {
			upperValue = `${firstValue} ${operator}`
			lowerValue = secondValue
		}
		if (finalValue !== '' && firstValue === '' && secondValue === '' && operator === '') {
			upperValue = ''
			lowerValue = finalValue
		}

		onValues(upperValue, lowerValue)
	}, [firstValue, secondValue, finalValue, operator, onValues])

	const onNumberHandler = value => {
		if (value === '0' && firstValue === '0' && operator === '') return
		if (value === '0' && firstValue !== '' && operator !== '' && secondValue === '0') return

		if (operator === '' && firstValue.length < 15) {
			if (firstValue === '0') {
				setFirstValue(value)
			} else {
				setFirstValue(state => state + value)
			}
		}
		if (operator !== '' && firstValue !== '' && secondValue.length < 15) {
			if (secondValue === '0') {
				setSecondValue(value)
			} else {
				setSecondValue(state => state + value)
			}
		}
		setFinalValue('')
	}

	const onOperatorHandler = value => {
		if (firstValue !== '' && secondValue === '') {
			setOperator(value)
		}
		if (firstValue !== '' && secondValue !== '' && operator !== '') {
			onEqualHandler()

			setFirstValue(endValue.toString())
			setFinalValue('')
			setOperator(value)
		}
	}

	const onDelHandler = value => {
		if (operator === '' && firstValue.length > 0 && value === 'Del') {
			setFirstValue(state => state.slice(0, -1))
		}
		if (operator !== '' && secondValue.length > 0 && value === 'Del') {
			setSecondValue(state => state.slice(0, -1))
		}
		if (operator === '' && firstValue.length > 0 && value === 'CE') {
			setFirstValue('')
		}
		if (operator !== '' && secondValue.length > 0 && value === 'CE') {
			setSecondValue('')
		}
		if (value === 'C') {
			setFirstValue('')
			setSecondValue('')
			setFinalValue('')
			setOperator('')
		}
	}

	const onEqualHandler = () => {
		if (operator === '' || secondValue === '') return

		if (operator === '+') {
			endValue = addNumbers(firstValue, secondValue)
		}
		if (operator === '-') {
			endValue = substractNumbers(firstValue, secondValue)
		}
		if (operator === '*') {
			endValue = multipNumbers(firstValue, secondValue)
		}
		if (operator === '/') {
			endValue = divideNumbers(firstValue, secondValue)
		}
		const decinalPlaces = Math.max(firstValue.split('.')[1]?.length ?? 0, secondValue.split('.')[1]?.length ?? 0)

		setFinalValue(endValue.toFixed(decinalPlaces).toString())
		setFirstValue('')
		setSecondValue('')
		setOperator('')
	}

	const onAddonsHandler = value => {
		if (value === '+/-' && secondValue === '' && operator === '') {
			setFirstValue(state => (+state * -1).toString())
		}
		if (value === '+/-' && secondValue !== '') {
			setSecondValue(state => (+state * -1).toString())
		}
		if (value === '.' && firstValue !== '' && secondValue === '' && operator === '' && firstValue.indexOf('.') === -1) {
			setFirstValue(state => state + value)
		}
		if (value === '.' && secondValue !== '' && secondValue.indexOf('.') === -1) {
			setSecondValue(state => state + value)
		}
	}

	return (
		<div className={styles.calcBody}>
			<CalculatorButton value='Del' handleBtnValue={onDelHandler}>
				DL
			</CalculatorButton>
			<CalculatorButton value='CE' handleBtnValue={onDelHandler}>
				CE
			</CalculatorButton>
			<CalculatorButton value='C' handleBtnValue={onDelHandler}>
				C
			</CalculatorButton>
			<CalculatorButton value='/' handleBtnValue={onOperatorHandler}>
				/
			</CalculatorButton>
			<CalculatorButton value='7' handleBtnValue={onNumberHandler} isNum={true}>
				7
			</CalculatorButton>
			<CalculatorButton value='8' handleBtnValue={onNumberHandler} isNum={true}>
				8
			</CalculatorButton>
			<CalculatorButton value='9' handleBtnValue={onNumberHandler} isNum={true}>
				9
			</CalculatorButton>
			<CalculatorButton value='*' handleBtnValue={onOperatorHandler}>
				*
			</CalculatorButton>
			<CalculatorButton value='4' handleBtnValue={onNumberHandler} isNum={true}>
				4
			</CalculatorButton>
			<CalculatorButton value='5' handleBtnValue={onNumberHandler} isNum={true}>
				5
			</CalculatorButton>
			<CalculatorButton value='6' handleBtnValue={onNumberHandler} isNum={true}>
				6
			</CalculatorButton>
			<CalculatorButton value='-' handleBtnValue={onOperatorHandler}>
				-
			</CalculatorButton>
			<CalculatorButton value='1' handleBtnValue={onNumberHandler} isNum={true}>
				1
			</CalculatorButton>
			<CalculatorButton value='2' handleBtnValue={onNumberHandler} isNum={true}>
				2
			</CalculatorButton>
			<CalculatorButton value='3' handleBtnValue={onNumberHandler} isNum={true}>
				3
			</CalculatorButton>
			<CalculatorButton value='+' handleBtnValue={onOperatorHandler}>
				+
			</CalculatorButton>
			<CalculatorButton value='+/-' handleBtnValue={onAddonsHandler}>
				+/-
			</CalculatorButton>
			<CalculatorButton value='0' handleBtnValue={onNumberHandler} isNum={true}>
				0
			</CalculatorButton>
			<CalculatorButton value='.' handleBtnValue={onAddonsHandler}>
				.
			</CalculatorButton>
			<CalculatorButton value='=' handleBtnValue={onEqualHandler}>
				=
			</CalculatorButton>
		</div>
	)
}

export default CalculatorBody
