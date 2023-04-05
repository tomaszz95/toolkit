import styles from './FinancesModal.module.css'
import FinancesModalForm from './FinancesModalForm'

const FinancesModal = ({ onHideModal }) => {
	return (
		<div className={styles.modal}>
			<FinancesModalForm onHideModal={onHideModal} />
		</div>
	)
}

export default FinancesModal
