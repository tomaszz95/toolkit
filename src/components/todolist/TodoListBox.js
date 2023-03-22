import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import styles from './TodoListBox.module.css'

const TodoListBox = ({ onOpenModal }) => {
	const [tasks, setTasks] = useState([])
	const taskList = useSelector(state => state.todo)

	useEffect(() => {
		setTasks(taskList)
	}, [taskList])

	return tasks.length === 0 ? (
		<p className={styles.error}>No tasks on the list...</p>
	) : (
		<ul className={styles.container}>
			{tasks.map(task => (
				<TodoListItem key={task.id} id={task.id} title={task.name} openModal={onOpenModal} />
			))}
		</ul>
	)
}

export default TodoListBox
