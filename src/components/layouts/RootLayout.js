import { Outlet } from 'react-router-dom'
import Navigation from '../navigation/Navigation'
import Topbar from './Topbar'
import styles from './RootLayout.module.css'

const RootLayout = () => {
	return (
		<>
			<header className={styles.header}>
				<Topbar />
				<Navigation />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout
