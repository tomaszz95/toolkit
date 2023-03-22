import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../../store/todo-slice'
import styles from './AddTodoBox.module.css'

const AddTodoBox = () => {
	const [error, setError] = useState(false)
	const inputRef = useRef('')
	const dispatch = useDispatch()

	const addTaskHandler = e => {
		e.preventDefault()

		if (inputRef.current.value.trim() === '') {
			setError(true)
		} else {
			dispatch(todoActions.addTask(inputRef.current.value))
			inputRef.current.value = ''
			setError(false)
		}
	}

	return (
		<form className={styles.container} onSubmit={addTaskHandler}>
			<label htmlFor='task' className={styles.label}>
				Add task to the list
			</label>
			{error ? <p className={styles.error}>Thie field cannot be empty!</p> : null}
			<div className={styles.box}>
				<input
					type='text'
					id='task'
					placeholder='Enter the content of the task...'
					className={styles.input}
					ref={inputRef}
				/>
				<button aria-label='Add new task' className={styles.button}>
					Add
				</button>
			</div>
		</form>
	)
}

export default AddTodoBox
