import { NavLink } from 'react-router-dom'
import styles from './NavigationItem.module.css'

const NavigationItem = ({ id, itemName, icon }) => {
	return (
		<NavLink to={id} id={id} aria-label={`Change to ${itemName}`} className={styles.link}>
			<i className={icon}></i>
			<p className={styles.text}>{itemName}</p>
		</NavLink>
	)
}

export default NavigationItem
