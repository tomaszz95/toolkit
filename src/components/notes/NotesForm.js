import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { noteActions } from '../../store/note-slice'
import styles from './NotesForm.module.css'

const NotesTools = () => {
	const [error, setError] = useState(false)
	const inputRef = useRef('')
	const textareaRef = useRef('')
	const dispatch = useDispatch()

	const addNewNote = e => {
		e.preventDefault()

		if (inputRef.current.value.trim() === '' || textareaRef.current.value.trim() === '') {
			setError(true)
		} else {
			dispatch(noteActions.addNote({ title: inputRef.current.value, description: textareaRef.current.value }))
			inputRef.current.value = ''
			textareaRef.current.value = ''
			setError(false)
		}
	}

	return (
		<form className={styles.box}>
			<h3 className={styles.heading}>Add note</h3>
			<label className={styles.label} htmlFor='noteTitle'>
				Type a title for the note
			</label>
			<input className={styles.input} type='text' id='noteTitle' ref={inputRef} />
			<label className={styles.label} htmlFor='noteContent'>
				Type a content for the note
			</label>
			<textarea className={styles.textarea} type='text' id='noteContent' ref={textareaRef} />
			{error && <p className={styles.error}>Fields cannot be empty!</p>}
			<div className={styles.buttons}>
				<button className={styles.button} aria-label='Add new note' onClick={addNewNote}>
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
		</form>
	)
}

export default NotesTools
