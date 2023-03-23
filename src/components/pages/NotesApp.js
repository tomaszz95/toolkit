import AppsTitle from '../layouts/AppsTitle'
import NotesListBox from '../notes/NotesListBox'
import NotesForm from '../notes/NotesForm'
import styles from './NotesApp.module.css'

const NotesApp = () => {
	return (
		<section className={styles.notes}>
			<AppsTitle title='Notes App' />
			<NotesListBox />
			<NotesForm />
		</section>
	)
}

export default NotesApp
