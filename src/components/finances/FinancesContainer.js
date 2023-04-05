import styles from './FinancesContainer.module.css'
import FinancesListBox from './FinancesListBox'
import FinancesTotalBox from './FinancesTotalBox'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const FinancesContainer = () => {
	const [incomeArr, setIncomeArr] = useState([])
	const [expensesArr, setExpensesArr] = useState([])
	const [totalValues, setTotalValues] = useState({ totalIncome: 0, totalExpenses: 0, balance: 0 })
	const financesList = useSelector(state => state.finances)

	useEffect(() => {
		setIncomeArr(financesList.income)
		setExpensesArr(financesList.expenses)
		let incomeValue = 0
		let expensesValue = 0
		let sumValue = 0

		if (financesList.income.length > 0 && incomeArr.length > 0) {
			const incomeValuesArr = financesList.income.map(item => item.value)
			incomeValue = incomeValuesArr.reduce((accVal, currVal) => accVal + currVal, 0)
		}
		
		if (financesList.expenses.length > 0 && expensesArr.length > 0) {
			const expensesValuesArr = financesList.expenses.map(item => item.value)
			expensesValue = expensesValuesArr.reduce((accVal, currVal) => accVal + currVal, 0)
		}

		sumValue = incomeValue + expensesValue
		setTotalValues({ totalIncome: incomeValue, totalExpenses: expensesValue, balance: sumValue })
	}, [financesList, incomeArr, expensesArr])

	return (
		<div className={styles.container}>
			<FinancesListBox listType='Income' moneyArray={incomeArr} />
			<FinancesListBox listType='Expenses' moneyArray={expensesArr} />
			<FinancesTotalBox totalValues={totalValues} />
		</div>
	)
}

export default FinancesContainer
