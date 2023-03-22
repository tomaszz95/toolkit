import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../store/todo-slice'
import styles from './TodoListItem.module.css'

const TodoListItem = ({ title, id, openModal }) => {
	const [checked, isChecked] = useState(false)
	const dispatch = useDispatch()

	const checkTaskFnc = e => {
		const clickedTaskId = e.target.closest('li').id
		dispatch(todoActions.changeCheck(clickedTaskId))
		isChecked(!checked)
	}

	const deleteTask = e => {
		const clickedTaskId = e.target.closest('li').id
		dispatch(todoActions.deleteTask(clickedTaskId))
	}

	const openEditTaskModal = e => {
		const clickedTaskId = e.target.closest('li').id
		openModal(clickedTaskId)
	}

	return (
		<li className={styles.task} id={id}>
			<p className={`${styles.title} ${checked ? styles.checkTask : ''}`}>{title}</p>
			<div className={styles.tools}>
				<button className={styles.check} aria-label='Check / uncheck task' onClick={checkTaskFnc}>
					<i className='fa-solid fa-check'></i>
				</button>
				<button className={`${styles.edit} ${checked ? styles.checkTask : ''}`} aria-label='Edit task' onClick={openEditTaskModal} disabled={checked}>
					EDIT
				</button>
				<button className={styles.delete} aria-label='Delete task' onClick={deleteTask}>
					<i className='fa-solid fa-x'></i>
				</button>
			</div>
		</li>
	)
}

export default TodoListItem
