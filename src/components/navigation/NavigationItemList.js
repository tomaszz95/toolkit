import NavigationItem from './NavigationItem'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './NavigationItemList.module.css'

const navItemsData = [
	{
		id: 'todo',
		itemName: 'Todo List',
		iconClassName: 'fa-solid fa-list nav__container--item-icon',
	},
	{
		id: 'notes',
		itemName: 'Notes App',
		iconClassName: 'fa-solid fa-note-sticky nav__container--item-icon',
	},
	{
		id: 'finance',
		itemName: 'Finance Manager',
		iconClassName: 'fa-solid fa-money-bill-wave nav__container--item-icon',
	},
	{
		id: 'calculator',
		itemName: 'Calculator',
		iconClassName: 'fa-solid fa-calculator nav__container--item-icon',
	},
	{
		id: 'weather',
		itemName: 'Weather App',
		iconClassName: 'fa-solid fa-cloud-sun nav__container--item-icon',
	},
]

const NavigationItemList = () => {
	let { pathname } = useLocation()

	useEffect(() => {
		let currElement
		let allElements
		const path = pathname.slice(1)
		if (path === '') {
			currElement = document.getElementById('todo').closest('li')
		} else {
			currElement = document.getElementById(path).closest('li')
			allElements = Array.from(document.getElementById(path).closest('ul').children)
			allElements.forEach(link => link.classList.remove('active-link'))
		}

		currElement.classList.add('active-link')
	}, [pathname])

	return (
		<ul className={styles.container}>
			{navItemsData.map(item => (
				<li key={item.id} className={styles.item}>
					<NavigationItem id={item.id} itemName={item.itemName} icon={item.iconClassName} />
				</li>
			))}
		</ul>
	)
}

export default NavigationItemList
