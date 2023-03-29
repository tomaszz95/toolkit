import AppsTitle from '../layouts/AppsTitle'
import FinancesContainer from '../finances/FinancesContainer'
import AddFinancesBox from '../finances/AddFinancesBox'
import FinancesModal from '../finances/FinancesModal'
import styles from './FinancesApp.module.css'

const FinanceApp = () => {
	return (
		<section className={styles.money}>
			<AppsTitle title='Finances Manager' />
			<FinancesContainer />
			<AddFinancesBox />
			<FinancesModal />
		</section>
	)
}

export default FinanceApp
