import AppsTitle from '../layouts/AppsTitle'
import FinancesContainer from '../finances/FinancesContainer'
import AddFinancesBox from '../finances/AddFinancesBox'
import FinancesModal from '../finances/FinancesModal'
import styles from './FinancesApp.module.css'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useLocalStorage from '../hooks/useLocalStorage'
import { financesActions } from '../../store/finances-slice'

const FinanceApp = () => {
	const [showModal, setShowModal] = useState(false)
	const { addValue, getValue } = useLocalStorage()
	const dispatch = useDispatch()

	useEffect(() => {
		const storageValue = getValue('finances')

		if (storageValue === null) return

		if (storageValue.income.length !== 0 || storageValue.expenses.length !== 0) {
			const storageArray = [...storageValue.income, ...storageValue.expenses]
			storageArray.map(item =>
				dispatch(financesActions.addFinance({ name: item.name, value: item.value, type: item.type, id: item.id }))
			)
		}
	}, [getValue, addValue, dispatch])

	const showModalHandler = () => {
		window.scrollTo({
			top: 230,
		})
		setShowModal(true)
	}

	const hideModalHandler = () => {
		setShowModal(false)
	}

	return (
		<section className={styles.money}>
			<AppsTitle title='Finances Manager' />
			<FinancesContainer />
			<AddFinancesBox onShowModal={showModalHandler} />
			{showModal && <FinancesModal onHideModal={hideModalHandler} />}
		</section>
	)
}

export default FinanceApp
