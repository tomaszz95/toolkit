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
		deleteTask(state, action) {
			const updatedTasks = state.filter(item => item.id !== action.payload)
			return updatedTasks
		},
		editTask(state, action) {
			console.log(action.payload);
			return state.map(todo => {
				if (todo.id === action.payload.id) {
					return { ...action.payload }
				} else {
					return todo
				}
			})
		},
	},
})

export const todoActions = todoSlice.actions
export default todoSlice
