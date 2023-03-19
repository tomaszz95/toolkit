import { useEffect, useState } from 'react'
import styles from './Topbar.module.css'
import useLocalStorage from '../hooks/useLocalStorage'

const Topbar = () => {
	const [theme, setTheme] = useState()
	const { getValue, addValue } = useLocalStorage()

	const changeTheme = () => {
		if (theme === 'dark') {
			setTheme('light')
			addValue('theme', 'light')
			document.documentElement.setAttribute('color-scheme', 'light')
		} else {
			setTheme('dark')
			addValue('theme', 'dark')
			document.documentElement.setAttribute('color-scheme', 'dark')
		}
	}

	useEffect(() => {
		const storageValue = getValue('theme')
		if (storageValue == null) {
			setTheme('dark')
			document.documentElement.setAttribute('color-scheme', 'dark')
		} else {
			setTheme(storageValue)
			document.documentElement.setAttribute('color-scheme', storageValue)
		}
	}, [getValue])

	const sliderClass = theme === 'dark' ? styles.slider : `${styles.slider} ${styles.active}`

	const logoColor = theme === 'dark' ? 'white' : 'black'

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24' fill={logoColor}>
					<path d='M6.914 2.741l15.557 15.556-4.243 4.243-15.556-15.557 4.242-4.242zm-.707-.707l-2.033-2.034-4.174 4.243 1.965 2.034 4.242-4.243zm12.821 21.119l4.972.847-.918-4.901-4.054 4.054zm-4.567-15.694l.389-.388.707.707.707-.707-.707-.707.707-.707.707.707.708-.708-.707-.706 2.121-2.121 2.121 2.121-4.631 4.631 1.393 1.393 6.024-6.024-4.908-4.95-6.045 6.045 1.414 1.414zm-4.949 9.193l-4.562 4.561-2.121-2.121.707-.708.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.706.319-.319-1.415-1.415-5.975 5.976 4.95 4.908 5.955-5.955-1.393-1.393zm9.934-11.349c.195-.195.195-.512 0-.707s-.512-.195-.707 0-.195.512 0 .707.512.196.707 0z' />
				</svg>
				<span className={styles.title}>ToolKit</span>
			</div>
			<button aria-label='Change page theme' className={styles.button} onClick={changeTheme}>
				<div className={sliderClass}></div>
			</button>
		</div>
	)
}
export default Topbar
