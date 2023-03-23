import styles from './NotesItem.module.css'

const NotesItem = ({ title, id, description }) => {
	return (
		<li className={styles.note} id={id}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
			<div className={styles.buttons}>
				<button className={styles.edit} aria-label='Edit note'>
					Edit
				</button>
				<button className={styles.delete} aria-label='Delete note'>
					Delete
				</button>
			</div>
		</li>
	)
}

export default NotesItem
