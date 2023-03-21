import { configureStore } from '@reduxjs/toolkit'
import todo from './todo-slice'

const store = configureStore({
	reducer: {
		todo: todo.reducer,
	},
})

export default store
