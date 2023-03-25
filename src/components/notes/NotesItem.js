import styles from './NotesItem.module.css'
import { useDispatch } from 'react-redux'
import { noteActions } from '../../store/note-slice'
import useLocalStorage from '../hooks/useLocalStorage'

const NotesItem = ({ title, id, description, onEdit }) => {
	const dispatch = useDispatch()
	const { getValue, removeValue } = useLocalStorage()

	const editNote = e => {
		onEdit(e.target.closest('li').id)

		window.scrollTo({
			top: document.documentElement.scrollHeight,
		})
	}

	const deleteNote = e => {
		const storageValue = getValue('notes')
		const noteId = e.target.closest('li').id
		dispatch(noteActions.deleteNote(noteId))

		if (storageValue.length === 1) {
			removeValue('notes')
		}
	}

	return (
		<li className={styles.note} id={id}>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
			<div className={styles.buttons}>
				<button className={styles.edit} aria-label='Edit note' onClick={editNote}>
					Edit
				</button>
				<button className={styles.delete} aria-label='Delete note' onClick={deleteNote}>
					Delete
				</button>
			</div>
		</li>
	)
}

export default NotesItem
