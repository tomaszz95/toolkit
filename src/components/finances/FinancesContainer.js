import styles from './FinancesContainer.module.css'
import FinancesListBox from './FinancesListBox'
import FinancesTotalBox from './FinancesTotalBox'

const arrIncome = [
	{ name: 'asdsssds', value: 3112, id: '1' },
	{ name: 'assssddsads', value: 1213, id: '2' },
	{ name: 'assssddsads asdsadsda', value: 123112, id: '3' },
	{ name: 'asddsasssssds', value: 12, id: '4' },
]

const arrExpenses = [
	{ name: 'asdds', value: 312, id: '5' },
	{ name: 'asddsads', value: 123, id: '6' },
	{ name: 'asddsads asdsadsda', value: 12312, id: '7' },
	{ name: 'asddsasssssds dssdsd sddsd', value: 2, id: '8' },
]

const FinancesContainer = () => {
	return (
		<div className={styles.container}>
			<FinancesListBox listType='Income' moneyArray={arrIncome} />
			<FinancesListBox listType='Expenses' moneyArray={arrExpenses} />
			<FinancesTotalBox />
		</div>
	)
}

export default FinancesContainer
