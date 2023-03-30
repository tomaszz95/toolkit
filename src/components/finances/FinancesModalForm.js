import styles from './FinancesModalForm.module.css'

const FinancesModalForm = () => {
	return (
		<>
			<div className={styles.box}>
				<label htmlFor='transactionName' className={styles.label}>
					Transaction name:
				</label>
				<small className={styles.small}>(Enter the name of the transaction)</small>
				<input type='text' id='transactionName' className={styles.input} />
				<p className={styles.error}>This field cannot be empty!</p>
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
				<input type='number' id='transactionValue' className={styles.input} />
				<p className={styles.error}>This field cannot be empty!</p>
			</div>
			<div className={styles.box}>
				<label htmlFor='transactionType' className={styles.label}>
					Transaction type:
				</label>
				<small className={styles.small}>(Choose the type of transaction)</small>
				<select defaultValue='0' id='transactionType' className={styles.select}>
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
				<p className={styles.error}>You must choose type of transaction!</p>
			</div>
			<div className={styles.buttons}>
				<button className={styles.button} aria-label='Add transaction'>
					Add transaction
				</button>
				<button className={styles.button} aria-label='Cancel transaction'>
					Cancel
				</button>
			</div>
		</>
	)
}

export default FinancesModalForm
