import styles from './FinancesBoxItem.module.css'

const FinancesBoxItem = ({ listType, value, name, id }) => {
	return (
		<li id={id} className={styles.item}>
			<div className={styles.itemText}>
				<i className={`${styles.itemIcon} fa-solid fa-stethoscope`} />
				<span className={styles.itemName}>{name}</span>
			</div>
			<div className={styles.itemData}>
				<span className={`${styles.itemNumber} ${listType === 'Expenses' ? styles.expenses : ''}`}>{value}$</span>
				<button className={styles.button} aria-label='Delete transaction'>
					<i className={`${styles.itemDel} fa-solid fa-x`} />
				</button>
			</div>
		</li>
	)
}

export default FinancesBoxItem
