import styles from './NotesForm.module.css'

const NotesTools = () => {
	return (
		<div className={styles.box}>
			<h3 className={styles.heading}>Add note</h3>
			<label className={styles.label} htmlFor='noteTitle'>
				Type a title for the note
			</label>
			<input className={styles.input} type='text' id='noteTitle' />
			<p className={styles.error}>This field cannot be empty!</p>
			<label className={styles.label} htmlFor='noteContent'>
				Type a content for the note
			</label>
			<textarea className={styles.textarea} type='text' id='noteContent' />
			<p className={styles.error}>This field cannot be empty!</p>
			<div className={styles.buttons}>
				<button className={styles.button} aria-label='Add new note'>
					Add note
				</button>
				<button className={styles.button} aria-label='Clear inputs'>
					Clear inputs
				</button>
			</div>
			<div className={styles.buttons}>
				<button className={styles.button} aria-label='Edit note'>
					Edit note
				</button>
				<button className={styles.button} aria-label='Cancel edit'>
					Cancel
				</button>
			</div>
		</div>
	)
}

export default NotesTools
