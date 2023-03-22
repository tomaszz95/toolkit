import styles from './TodoModal.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { todoActions } from '../../store/todo-slice'

const TodoModal = ({ taskId, onCloseModal }) => {
	const [editedTask, setEditedTask] = useState('')
	const [taskName, setTaskName] = useState('')
	const [error, setError] = useState(false)
	const inputRef = useRef()
	const taskList = useSelector(state => state.todo)
	const dispatch = useDispatch()

	useEffect(() => {
		const task = taskList.filter(task => task.id === taskId)
		setEditedTask(...task)
		setTaskName(task[0].name)
	}, [taskId, taskList])

	const listenToInput = () => {
		setTaskName(inputRef.current.value)

		if (inputRef.current.value.trim() === '') {
			setError(true)
			console.log(error)
		} else {
			setError(false)
		}
	}

	const editTodoFunction = () => {
		const task = { ...editedTask, name: inputRef.current.value }
		console.log(task)
		dispatch(todoActions.editTask(task))
		onCloseModal()
	}

	const cancelTodoFunction = () => {
		console.log(editedTask)
		dispatch(todoActions.editTask(editedTask))
		onCloseModal()
	}

	return (
		<div className={styles.container}>
			<div className={styles.shadow}></div>
			<div className={styles.box}>
				<label htmlFor='editTask' className={styles.label}>
					Edit your task
				</label>
				{editedTask.name === '' ? <p className={styles.error}>This field cannot be empty!</p> : null}
				<input
					type='text'
					id='editTask'
					className={styles.input}
					ref={inputRef}
					value={editedTask.name}
					onChange={listenToInput}
				/>
				<div className={styles.buttons}>
					<button className={styles.edit} aria-label='Edit task' onClick={editTodoFunction}>
						Edit
					</button>
					<button className={styles.cancel} aria-label='Cancel changes' onClick={cancelTodoFunction}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default TodoModal
