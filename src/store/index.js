import { configureStore } from '@reduxjs/toolkit'
import todo from './todo-slice'
import note from './note-slice'

const store = configureStore({
	reducer: {
		todo: todo.reducer,
		note: note.reducer,
	},
})

export default store
