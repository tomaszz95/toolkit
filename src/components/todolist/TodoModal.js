import styles from './TodoModal.module.css'

const TodoModal = () => {
	return (
		<div className={styles.container}>
			<div className={styles.shadow}></div>
			<div className={styles.box}>
				<label htmlFor='edit-task' className={styles.label}>
					Edit your task
				</label>
				<p className={styles.error}>This field cannot be empty!</p>
				<input type='text' id='edit-task' className={styles.input} />
				<div className={styles.buttons}>
					<button className={styles.edit} aria-label='Edit task'>
						Edit
					</button>
					<button className={styles.cancel} aria-label='Cancel changes'>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default TodoModal
