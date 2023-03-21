import AppsTitle from '../layouts/AppsTitle'
import TodoListBox from '../todolist/TodoListBox'
import AddTodoBox from '../todolist/AddTodoBox'
import styles from './TodoApp.module.css'
import TodoModal from '../todolist/TodoModal'

const TodoApp = () => {
	return (
		<section className={styles.todo}>
			<AppsTitle title='Todo List' />
			<TodoListBox />
			<AddTodoBox/>
			<TodoModal />
		</section>
	)
}

export default TodoApp
