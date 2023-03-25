import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoListItem from './TodoListItem'
import styles from './TodoListBox.module.css'
import useLocalStorage from '../hooks/useLocalStorage'
import { todoActions } from '../../store/todo-slice'

const TodoListBox = ({ onOpenModal }) => {
	const [tasks, setTasks] = useState([])
	const taskList = useSelector(state => state.todo)
	const { getValue, addValue } = useLocalStorage()
	const dispatch = useDispatch()

	useEffect(() => {
		if (taskList.length !== 0) {
			setTasks(taskList)
			addValue('todo', taskList)
		} else {
			setTasks([])
		}
	}, [taskList, addValue])

	useEffect(() => {
		const storageValue = getValue('todo')
		if (storageValue !== null) {
			setTasks(storageValue)
			dispatch(todoActions.updateFromStorage(storageValue))
		}
	}, [getValue, addValue, dispatch])

	return tasks.length === 0 ? (
		<p className={styles.error}>No tasks on the list...</p>
	) : (
		<ul className={styles.container}>
			{tasks.map(task => (
				<TodoListItem key={task.id} id={task.id} title={task.name} check={task.isChecked} openModal={onOpenModal} />
			))}
		</ul>
	)
}

export default TodoListBox
