import AppsTitle from '../layouts/AppsTitle'
import NotesListBox from '../notes/NotesListBox'
import NotesForm from '../notes/NotesForm'
import styles from './NotesApp.module.css'
import { useState } from 'react'

const NotesApp = () => {
	const [noteId, setNoteId] = useState('')
	const editNoteHandler = id => {
		setNoteId(id)
	}

	const cleanNoteIdHandler = () => {
		setNoteId('')
	}

	return (
		<section className={styles.notes}>
			<AppsTitle title='Notes App' />
			<NotesListBox onEditNote={editNoteHandler} />
			<NotesForm noteId={noteId} onCleanId={cleanNoteIdHandler} />
		</section>
	)
}

export default NotesApp
