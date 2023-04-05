import styles from './AddFinancesBox.module.css'
import { useDispatch } from 'react-redux'
import { financesActions } from '../../store/finances-slice'

const AddFinancesBox = ({ onShowModal }) => {
	const dispatch = useDispatch()

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<button className={styles.button} aria-label='Add transaction' onClick={onShowModal}>
					Add transaction
				</button>
				<button
					className={styles.button}
					aria-label='Delete income'
					onClick={() => {
						dispatch(financesActions.deleteFinancesBox('income'))
					}}>
					Delete income
				</button>
				<button
					className={styles.button}
					aria-label='Delete expenses'
					onClick={() => {
						dispatch(financesActions.deleteFinancesBox('expenses'))
					}}>
					Delete expenses
				</button>
				<button
					className={styles.button}
					aria-label='Delete all income and expenses'
					onClick={() => {
						dispatch(financesActions.deleteFinancesBox('all'))
					}}>
					Delete all
				</button>
			</div>
		</div>
	)
}

export default AddFinancesBox
