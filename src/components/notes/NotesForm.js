import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { noteActions } from '../../store/note-slice'
import styles from './NotesForm.module.css'

const NotesTools = ({ noteId, onCleanId }) => {
	const [error, setError] = useState(false)
	const [editedItem, setEditedItem] = useState([])
	const inputRef = useRef('')
	const textareaRef = useRef('')
	const dispatch = useDispatch()
	const noteList = useSelector(state => state.note)

	useEffect(() => {
		const editedNote = noteList.filter(note => note.id === noteId)

		if (editedNote.length !== 0) {
			inputRef.current.value = editedNote[0].title
			textareaRef.current.value = editedNote[0].description
		}

		if (editedNote.length === 0) {
			inputRef.current.value = ''
			textareaRef.current.value = ''
		}

		setEditedItem(editedNote)
		setError(false)
	}, [noteId, noteList])

	const clearInputs = e => {
		e.preventDefault()
		inputRef.current.value = ''
		textareaRef.current.value = ''
		setError(false)
	}

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

	const cancelEdit = e => {
		setEditedItem([])
		clearInputs(e)
		onCleanId()
	}

	const editNote = e => {
		e.preventDefault()

		if (inputRef.current.value.trim() === '' || textareaRef.current.value.trim() === '') {
			setError(true)
		} else {
			dispatch(
				noteActions.editNote({
					title: inputRef.current.value,
					description: textareaRef.current.value,
					id: editedItem[0].id,
				})
			)
			inputRef.current.value = ''
			textareaRef.current.value = ''
			setError(false)
			onCleanId()
			setEditedItem([])
		}
	}

	return (
		<form className={styles.box}>
			<h3 className={styles.heading}>{editedItem.length === 0 ? 'Add note' : 'Edit note'}</h3>
			<label className={styles.label} htmlFor='noteTitle'>
				Type a title for the note
			</label>
			<input className={styles.input} type='text' id='noteTitle' ref={inputRef} />
			<label className={styles.label} htmlFor='noteContent'>
				Type a content for the note
			</label>
			<textarea className={styles.textarea} type='text' id='noteContent' ref={textareaRef} />
			{error && <p className={styles.error}>Fields cannot be empty!</p>}
			{editedItem.length === 0 ? (
				<div className={styles.buttons}>
					<button className={styles.button} aria-label='Add new note' onClick={addNewNote}>
						Add note
					</button>
					<button className={styles.button} aria-label='Clear inputs' onClick={clearInputs}>
						Clear inputs
					</button>
				</div>
			) : (
				<div className={styles.buttons}>
					<button className={styles.button} aria-label='Edit note' onClick={editNote}>
						Edit note
					</button>
					<button className={styles.button} aria-label='Cancel edit' onClick={cancelEdit}>
						Cancel
					</button>
				</div>
			)}
		</form>
	)
}

export default NotesTools
