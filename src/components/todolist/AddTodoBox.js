import styles from './AddTodoBox.module.css'

const AddTodoBox = () => {
	return (
		<div className={styles.container}>
			<label htmlFor='task' className={styles.label}>
				Add task to the list
			</label>
			<p className={styles.error}>Thie field cannot be empty!</p>
			<div className={styles.box}>
				<input type='text' id='task' placeholder='Enter the content of the task...' className={styles.input} />
				<button aria-label='Add new task' className={styles.button}>
					Add
				</button>
			</div>
		</div>
	)
}

export default AddTodoBox
