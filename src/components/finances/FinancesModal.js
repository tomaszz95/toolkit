import styles from './FinancesModal.module.css'
import FinancesModalForm from './FinancesModalForm'

const FinancesModal = () => {
	return (
		<div className={styles.modal}>
			<FinancesModalForm />
		</div>
	)
}

export default FinancesModal
