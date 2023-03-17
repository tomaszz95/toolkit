// import styles from './MainNavigation.module.css'
import '../styles/themeStyles.css'

const MainNavigation = () => {
	const changeThemeToDark = () => {
		document.querySelector('body').classList.add('dark')
		document.querySelector('body').classList.remove('light')
	}
	const changeThemeToLight = () => {
		document.querySelector('body').classList.add('light')
		document.querySelector('body').classList.remove('dark')
	}

	return (
		<>
			<button onClick={changeThemeToDark}>To black</button>
			<button onClick={changeThemeToLight}>To white</button>
		</>
	)
}

export default MainNavigation
