import AppsTitle from '../layouts/AppsTitle'
import FinancesContainer from '../finances/FinancesContainer'
import AddFinancesBox from '../finances/AddFinancesBox'
import FinancesModal from '../finances/FinancesModal'
import styles from './FinancesApp.module.css'
import { useState } from 'react'

const FinanceApp = () => {
	const [showModal, setShowModal] = useState(false)

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
