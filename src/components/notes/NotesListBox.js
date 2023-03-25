import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NotesItem from './NotesItem'
import styles from './NotesListBox.module.css'
import useLocalStorage from '../hooks/useLocalStorage'
import { noteActions } from '../../store/note-slice'

const NotesListBox = ({ onEditNote }) => {
	const [notes, setNotes] = useState([])
	const notesList = useSelector(state => state.note)
	const { getValue, addValue } = useLocalStorage()
	const dispatch = useDispatch()

	useEffect(() => {
		if (notesList.length !== 0) {
			setNotes(notesList)
			addValue('notes', notesList)
		} else {
			setNotes([])
		}
	}, [addValue, notesList])

	useEffect(() => {
		const storageValue = getValue('notes')
		if (storageValue !== null) {
			setNotes(storageValue)
			dispatch(noteActions.updateFromStorage(storageValue))
		}
	}, [getValue, addValue, dispatch])

	return notes.length === 0 ? (
		<p className={styles.error}>No notes on the list...</p>
	) : (
		<ul className={styles.container}>
			{notes.map(note => (
				<NotesItem onEdit={onEditNote} key={note.id} id={note.id} title={note.title} description={note.description} />
			))}
		</ul>
	)
}

export default NotesListBox
