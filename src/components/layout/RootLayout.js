import { Outlet } from 'react-router-dom'
import MainNavigation from './MainNavigation'
import Topbar from './Topbar'
import styles from './RootLayout.module.css'

const RootLayout = () => {
	return (
		<>
			<header className={styles.header}>
				<Topbar />
				<MainNavigation />
			</header>
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout
