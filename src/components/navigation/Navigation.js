// import styles from './MainNavigation.module.css'
import NavigationItemList from './NavigationItemList'
import styles from './Navigation.module.css'

const MainNavigation = () => {
	return (
		<nav className={styles.nav}>
			<h1 className={styles.h1}>Choose your app!</h1>
			<NavigationItemList />
		</nav>
	)
}

export default MainNavigation
