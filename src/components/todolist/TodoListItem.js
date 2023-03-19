import styles from './TodoListItem.module.css'

const TodoListItem = ({ title }) => {
	return (
		<li className={styles.task}>
			<p className={styles.title}>{title}</p>
			<div className={styles.tools}>
				<button className={styles.check} aria-label='Check / uncheck task'>
					<i className='fa-solid fa-check'></i>
				</button>
				<button className={styles.edit} aria-label='Edit task'>
					EDIT
				</button>
				<button className={styles.delete} aria-label='Delete task'>
					<i className='fa-solid fa-x'></i>
				</button>
			</div>
		</li>
	)
}

export default TodoListItem
