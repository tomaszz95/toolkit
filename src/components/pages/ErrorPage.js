import { useRouteError } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.css'

export default function ErrorPage() {
	const error = useRouteError()

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Oops!</h1>
			<p className={styles.error}>Page {error.statusText || error.message}</p>
			<span className={styles.info}>
				The page you are looking for might have been removed, had it's name changed or is temporarily unavailable.
			</span>
			<Link aria-label='Back to homepage' className={styles.button} to='todo'>
				Back to Homepage
			</Link>
		</div>
	)
}
