import styles from './FinancesBoxItem.module.css'
import { useDispatch } from 'react-redux'
import { financesActions } from '../../store/finances-slice'

const FinancesBoxItem = ({ listType, value, name, id, type }) => {
	const dispatch = useDispatch()
	let icon

	switch (type) {
		case 'Work':
			icon = 'fa-briefcase'
			break
		case 'Bills':
			icon = 'fa-hand-holding-dollar'
			break
		case 'Transport':
			icon = 'fa-car'
			break
		case 'Shopping':
			icon = 'fa-cart-shopping'
			break
		case 'Healthcare':
			icon = 'fa-stethoscope'
			break
		case 'Food':
			icon = 'fa-burger'
			break
		case 'Fun':
			icon = 'fa-film'
			break
		case 'Gifts':
			icon = 'fa-gift'
			break
		case 'Other':
			icon = 'fa-dice'
			break
		default:
			icon = 'fa-question'
			break
	}
	
	const deleteItem = e => {
		const itemId = e.target.closest('li').id
		const itemValue = e.target.closest('div').firstChild.textContent.slice(0, -1)
		dispatch(financesActions.deleteOneTransaction({ itemId, itemValue }))
	}

	return (
		<li id={id} className={styles.item}>
			<div className={styles.itemText}>
				<i className={`${styles.itemIcon} fa-solid ${icon}`} />
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
