import { createSlice } from '@reduxjs/toolkit'

const noteSlice = createSlice({
	name: 'note',
	initialState: [],
	reducers: {
		addNote(state, action) {
			const id = Math.floor(Math.random() * Date.now()).toString()
			return [...state, { title: action.payload.title, description: action.payload.description, id: id }]
		},
		deleteNote(state, action) {
			const updatedNotes = state.filter(item => item.id !== action.payload)
			return updatedNotes
		},
		editNote(state, action) {
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

export const noteActions = noteSlice.actions
export default noteSlice
