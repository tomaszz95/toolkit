import { createSlice } from '@reduxjs/toolkit'

const financesSlice = createSlice({
	name: 'finances',
	initialState: { income: [], expenses: [] },
	reducers: {
		addFinance(state, action) {
			let arr
			const id = Math.floor(Math.random() * Date.now()).toString()
			if (action.payload.value > 0) {
				arr = {
					income: [
						...state.income,
						{ name: action.payload.name, value: action.payload.value, type: action.payload.type, id: id },
					],
					expenses: [...state.expenses],
				}
				return arr
			} else {
				arr = {
					income: [...state.income],
					expenses: [
						...state.expenses,
						{ name: action.payload.name, value: action.payload.value, type: action.payload.type, id: id },
					],
				}
				return arr
			}
		},
		deleteFinancesBox(state, action) {
			let arr
			if (action.payload === 'income') {
				arr = {
					income: [],
					expenses: [...state.expenses],
				}
				return arr
			} else if (action.payload === 'expenses') {
				arr = {
					income: [...state.income],
					expenses: [],
				}
				return arr
			} else if (action.payload === 'all') {
				arr = {
					income: [],
					expenses: [],
				}
				return arr
			}
		},
		deleteOneTransaction(state, action) {
			let arr
			if (+action.payload.itemValue > 0) {
				const incomeArr = JSON.parse(JSON.stringify(state.income))
				const filteredArr = incomeArr.filter(item => item.id !== action.payload.itemId)
				arr = {
					income: [...filteredArr],
					expenses: [...state.expenses],
				}
				return arr
			} else {
				const expensesArr = JSON.parse(JSON.stringify(state.expenses))
				const filteredArr = expensesArr.filter(item => item.id !== action.payload.itemId)
				arr = {
					income: [...state.income],
					expenses: [...filteredArr],
				}
				return arr
			}
		},
	},
})

export const financesActions = financesSlice.actions
export default financesSlice
