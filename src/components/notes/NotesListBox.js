import styles from './NotesListBox.module.css'
import NotesItem from './NotesItem'

const notes = [
	{ title: 'some note', description: 'lorem asdsad sasad sdsadd asdasd asdsad asdasd sddssd dssdsd sddssdsd sdsdsd', id: 1 },
	{ title: 'some note', description: 'lorem asdsad sasad sdsadd asdasd asdsad asdasd sddssd dssdsd sddssdsd sdsdsd', id: 2 },
	{ title: 'some note', description: 'lorem asdsad sasad sdsadd asdasd asdsad asdasd sddssd dssdsd sddssdsd sdsdsd', id: 3 },
	{ title: 'some note', description: 'lorem asdsad sasad sdsadd asdasd asdsad asdasd sddssd dssdsd sddssdsd sdsdsd', id: 4 },
]

const NotesListBox = () => {
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
