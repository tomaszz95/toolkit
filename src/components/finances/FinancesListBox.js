import FinancesBoxItem from './FinancesBoxItem'
import styles from './FinancesListBox.module.css'

const FinancesListBox = ({ listType, moneyArray }) => {

	if (moneyArray === '') {
		moneyArray = []
	}
	
	return (
		<div className={`${styles.box} ${listType === 'Expenses' ? styles.expenses : ''}`}>
			<h3 className={`${styles.title} ${listType === 'Expenses' ? styles.expensesColor : ''}`}>{listType}</h3>
			<ul className={styles.list}>
				{moneyArray.map(item => (
					<FinancesBoxItem
						listType={listType}
						value={item.value}
						name={item.name}
						key={item.id}
						id={item.id}
						type={item.type}
					/>
				))}
			</ul>
		</div>
	)
}

export default FinancesListBox
