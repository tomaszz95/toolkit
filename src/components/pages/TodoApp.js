import AppsTitle from '../layouts/AppsTitle'
import TodoListBox from '../todolist/TodoListBox'
import AddTodoBox from '../todolist/AddTodoBox'
import styles from './TodoApp.module.css'
import TodoModal from '../todolist/TodoModal'
import { useState } from 'react'

const TodoApp = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [taskId, setTaskId] = useState('')

	const openTodoModalHandler = id => {
		setIsOpen(true)
		setTaskId(id)
	}

	const closeTodoModalHandler = () => {
		setIsOpen(false)
	}

	return (
		<section className={styles.todo}>
			<AppsTitle title='Todo List' />
			<TodoListBox onOpenModal={openTodoModalHandler} />
			<AddTodoBox />
			{isOpen && <TodoModal taskId={taskId} onCloseModal={closeTodoModalHandler} />}
		</section>
	)
}

export default TodoApp
