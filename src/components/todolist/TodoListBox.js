import TodoListItem from './TodoListItem'
import styles from './TodoListBox.module.css'

const array = [
	{
		todoName: 'Throw out trash',
		checked: false,
		id: 1,
	},
	{
		todoName: 'Throw out tras',
		checked: false,
		id: 2,
	},
	{
		todoName: 'Throw out tra',
		checked: false,
		id: 3,
	},
	{
		todoName: 'Throw out tra',
		checked: false,
		id: 4,
	},
]

const TodoListBox = () => {
	return array.length === 0 ? (
		<p className={styles.error}>No tasks on the list...</p>
	) : (
		<ul className={styles.container}>
			{array.map(arr => (
				<TodoListItem key={arr.id} title={arr.todoName} />
			))}
		</ul>
	)
}

export default TodoListBox
