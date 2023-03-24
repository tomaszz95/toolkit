import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NotesItem from './NotesItem'
import styles from './NotesListBox.module.css'

const NotesListBox = () => {
	const [notes, setNotes] = useState([])
	const notesList = useSelector(state => state.note)

	useEffect(() => {
		setNotes(notesList)
	}, [notesList])

	return notes.length === 0 ? (
		<p className={styles.error}>No notes on the list...</p>
	) : (
		<ul className={styles.container}>
			{notes.map(note => (
				<NotesItem key={note.id} id={note.id} title={note.title} description={note.description} />
			))}
		</ul>
	)
}

export default NotesListBox
