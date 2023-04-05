import { configureStore } from '@reduxjs/toolkit'
import todo from './todo-slice'
import note from './note-slice'
import finances from './finances-slice'

const store = configureStore({
	reducer: {
		todo: todo.reducer,
		note: note.reducer,
		finances: finances.reducer,
	},
})

export default store
