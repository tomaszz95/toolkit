import styles from './FinancesBoxItem.module.css'
import { useDispatch } from 'react-redux'
import { financesActions } from '../../store/finances-slice'

const FinancesBoxItem = ({ listType, value, name, id }) => {
	const dispatch = useDispatch()

	const deleteItem = e => {
		const itemId = e.target.closest('li').id
		const itemValue = e.target.closest('div').firstChild.textContent.slice(0, -1)
		dispatch(financesActions.deleteOneTransaction({ itemId, itemValue }))
	}

	return (
		<li id={id} className={styles.item}>
			<div className={styles.itemText}>
				<i className={`${styles.itemIcon} fa-solid fa-stethoscope`} />
				<span className={styles.itemName}>{name}</span>
			</div>
			<div className={styles.itemData}>
				<span className={`${styles.itemNumber} ${listType === 'Expenses' ? styles.expenses : ''}`}>{value}$</span>
				<button className={styles.button} aria-label='Delete transaction' onClick={deleteItem}>
					<i className={`${styles.itemDel} fa-solid fa-x`} />
				</button>
			</div>
		</li>
	)
}

export default FinancesBoxItem
