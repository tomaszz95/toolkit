import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
	name: 'todo',
	initialState: [],
	reducers: {
		addTask(state, action) {
			const id = Math.floor(Math.random() * Date.now()).toString()
			return [...state, { name: action.payload, id: id, isChecked: false }]
		},
		changeCheck(state, action) {
			return state.map(todo => {
				if (todo.id === action.payload) {
					return { ...todo, isChecked: !todo.isChecked }
				} else {
					return todo
				}
			})
		},
	},
})

export const todoActions = todoSlice.actions
export default todoSlice
