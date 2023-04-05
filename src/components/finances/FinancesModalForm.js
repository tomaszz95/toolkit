import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { financesActions } from '../../store/finances-slice'
import styles from './FinancesModalForm.module.css'

const FinancesModalForm = ({ onHideModal }) => {
	const dispatch = useDispatch()
	const nameRef = useRef()
	const valueRef = useRef()
	const selectRef = useRef()
	const [errors, setErrors] = useState({ name: false, value: false, select: false })

	const checkAddInputs = () => {
		let errCount = 0
		if (nameRef.current.value.trim().length === 0) {
			setErrors(state => ({ ...state, name: true }))
			errCount++
		} else {
			setErrors(state => ({ ...state, name: false }))
		}

		if (valueRef.current.value.trim().length === 0 || +valueRef.current.value === 0) {
			errCount++
			setErrors(state => ({ ...state, value: true }))
		} else {
			setErrors(state => ({ ...state, value: false }))
		}

		if (selectRef.current.value === '0') {
			errCount++
			setErrors(state => ({ ...state, select: true }))
		} else {
			setErrors(state => ({ ...state, select: false }))
		}

		if (errCount === 0) {
			const transName = nameRef.current.value.trim()
			const transValue = +valueRef.current.value
			const transSelect = selectRef.current.value
			dispatch(financesActions.addFinance({ name: transName, value: transValue, type: transSelect }))
			onHideModal()
		}
	}
	const cancelEdit = () => {
		setErrors({ name: false, value: false, select: false })
		onHideModal()
	}

	return (
		<>
			<div className={styles.box}>
				<label htmlFor='transactionName' className={styles.label}>
					Transaction name:
				</label>
				<small className={styles.small}>(Enter the name of the transaction)</small>
				<input type='text' id='transactionName' className={styles.input} ref={nameRef} />
				{errors.name && <p className={styles.error}>This field cannot be empty!</p>}
			</div>
			<div className={styles.box}>
				<label htmlFor='transactionValue' className={styles.label}>
					Transaction value:
				</label>
				<small className={styles.small}>
					(If the number is greater than zero, it will be an
					<span className={styles.income}> income</span>. If smaller, it will be an
					<span className={styles.expenses}> expense</span>)
				</small>
				<input type='number' id='transactionValue' className={styles.input} ref={valueRef} />
				{errors.value && <p className={styles.error}>This field cannot be empty or '0'!</p>}
			</div>
			<div className={styles.box}>
				<label htmlFor='transactionType' className={styles.label}>
					Transaction type:
				</label>
				<small className={styles.small}>(Choose the type of transaction)</small>
				<select defaultValue='0' id='transactionType' className={styles.select} ref={selectRef}>
					<option value='0' disabled>
						--choose type of transaction--
					</option>
					<option value='Work'>Work</option>
					<option value='Bills'>Bills</option>
					<option value='Transport'>Transport</option>
					<option value='Shopping'>Shopping</option>
					<option value='Healthcare'>Healthcare</option>
					<option value='Food'>Food</option>
					<option value='Fun'>Fun</option>
					<option value='Gifts'>Gifts</option>
					<option value='Other'>Other</option>
				</select>
				{errors.select && <p className={styles.error}>You must choose type of transaction!</p>}
			</div>
			<div className={styles.buttons}>
				<button className={styles.button} aria-label='Add transaction' onClick={checkAddInputs}>
					Add transaction
				</button>
				<button className={styles.button} aria-label='Cancel transaction' onClick={cancelEdit}>
					Cancel
				</button>
			</div>
		</>
	)
}

export default FinancesModalForm
