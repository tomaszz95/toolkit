import AppsTitle from '../layouts/AppsTitle'
import TodoListBox from '../todolist/TodoListBox'
import AddTodoBox from '../todolist/AddTodoBox'
import styles from './TodoApp.module.css'

const TodoApp = () => {
	return (
		<section className={styles.todo}>
			<AppsTitle title='Todo List' />
			<TodoListBox />
			<AddTodoBox />
		</section>
	)
}

export default TodoApp
