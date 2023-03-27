import CalculatorButton from './CalculatorButton'
import styles from './CalculatorBody.module.css'
import { useState } from 'react'

const CalculatorBody = ({ onValues }) => {
	const [firstValue, setFirstValue] = useState('')
	const [secondValue, setSecondValue] = useState('')
	const [operator, setOperator] = useState('')
	const [endValue, setEndValue] = useState('')

	const onGetBtnValue = value => {

	}

	return (
		<div className={styles.calcBody}>
			<CalculatorButton value='Del' handleBtnValue={onGetBtnValue}>
				DL
			</CalculatorButton>
			<CalculatorButton value='CE' handleBtnValue={onGetBtnValue}>
				CE
			</CalculatorButton>
			<CalculatorButton value='C' handleBtnValue={onGetBtnValue}>
				C
			</CalculatorButton>
			<CalculatorButton value='/' handleBtnValue={onGetBtnValue}>
				/
			</CalculatorButton>
			<CalculatorButton value='7' handleBtnValue={onGetBtnValue} isNum={true}>
				7
			</CalculatorButton>
			<CalculatorButton value='8' handleBtnValue={onGetBtnValue} isNum={true}>
				8
			</CalculatorButton>
			<CalculatorButton value='9' handleBtnValue={onGetBtnValue} isNum={true}>
				9
			</CalculatorButton>
			<CalculatorButton value='*' handleBtnValue={onGetBtnValue}>
				*
			</CalculatorButton>
			<CalculatorButton value='4' handleBtnValue={onGetBtnValue} isNum={true}>
				4
			</CalculatorButton>
			<CalculatorButton value='5' handleBtnValue={onGetBtnValue} isNum={true}>
				5
			</CalculatorButton>
			<CalculatorButton value='6' handleBtnValue={onGetBtnValue} isNum={true}>
				6
			</CalculatorButton>
			<CalculatorButton value='-' handleBtnValue={onGetBtnValue}>
				-
			</CalculatorButton>
			<CalculatorButton value='1' handleBtnValue={onGetBtnValue} isNum={true}>
				1
			</CalculatorButton>
			<CalculatorButton value='2' handleBtnValue={onGetBtnValue} isNum={true}>
				2
			</CalculatorButton>
			<CalculatorButton value='3' handleBtnValue={onGetBtnValue} isNum={true}>
				3
			</CalculatorButton>
			<CalculatorButton value='+' handleBtnValue={onGetBtnValue}>
				+
			</CalculatorButton>
			<CalculatorButton value='+/-' handleBtnValue={onGetBtnValue}>
				+/-
			</CalculatorButton>
			<CalculatorButton value='0' handleBtnValue={onGetBtnValue} isNum={true}>
				0
			</CalculatorButton>
			<CalculatorButton value='.' handleBtnValue={onGetBtnValue}>
				.
			</CalculatorButton>
			<CalculatorButton value='=' handleBtnValue={onGetBtnValue}>
				=
			</CalculatorButton>
		</div>
	)
}

export default CalculatorBody
