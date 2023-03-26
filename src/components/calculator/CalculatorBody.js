import { useState } from 'react'
import CalculatorButton from './CalculatorButton'
import styles from './CalculatorBody.module.css'

const CalculatorBody = () => {
	const [result, setResult] = useState(0)
	const [input, setInput] = useState('')

	const handleInput = value => {
		setInput(input + value)
	}

	const handleClear = () => {
		setInput('')
		setResult(0)
	}

	const handleCalculate = () => {
		setResult(eval(input))
	}

	return (
		<div className={styles.calcBody}>
			<CalculatorButton value='Del' handleClick={handleInput}>
				DL
			</CalculatorButton>
			<CalculatorButton value='CE' handleClick={handleInput}>
				CE
			</CalculatorButton>
			<CalculatorButton value='C' handleClick={handleClear}>
				C
			</CalculatorButton>
			<CalculatorButton value='/' handleClick={handleInput}>
				/
			</CalculatorButton>
			<CalculatorButton value='7' handleClick={handleInput} isNum={true}>
				7
			</CalculatorButton>
			<CalculatorButton value='8' handleClick={handleInput} isNum={true}>
				8
			</CalculatorButton>
			<CalculatorButton value='9' handleClick={handleInput} isNum={true}>
				9
			</CalculatorButton>
			<CalculatorButton value='*' handleClick={handleInput}>
				*
			</CalculatorButton>
			<CalculatorButton value='4' handleClick={handleInput} isNum={true}>
				4
			</CalculatorButton>
			<CalculatorButton value='5' handleClick={handleInput} isNum={true}>
				5
			</CalculatorButton>
			<CalculatorButton value='6' handleClick={handleInput} isNum={true}>
				6
			</CalculatorButton>
			<CalculatorButton value='-' handleClick={handleInput}>
				-
			</CalculatorButton>
			<CalculatorButton value='1' handleClick={handleInput} isNum={true}>
				1
			</CalculatorButton>
			<CalculatorButton value='2' handleClick={handleInput} isNum={true}>
				2
			</CalculatorButton>
			<CalculatorButton value='3' handleClick={handleInput} isNum={true}>
				3
			</CalculatorButton>
			<CalculatorButton value='+' handleClick={handleInput}>
				+
			</CalculatorButton>
			<CalculatorButton value='+/-' handleClick={handleInput}>
				+/-
			</CalculatorButton>
			<CalculatorButton value='0' handleClick={handleInput} isNum={true}>
				0
			</CalculatorButton>
			<CalculatorButton value='.' handleClick={handleInput}>
				.
			</CalculatorButton>
			<CalculatorButton value='=' handleClick={handleCalculate}>
				=
			</CalculatorButton>
		</div>
	)
}

export default CalculatorBody
