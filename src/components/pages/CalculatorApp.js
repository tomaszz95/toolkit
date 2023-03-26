import AppsTitle from '../layouts/AppsTitle'
import styles from './CalculatorApp.module.css'
import CalculatorBox from '../calculator/CalculatorBox'

const CalculatorApp = () => {
	return (
		<section className={styles.calc}>
			<AppsTitle title='Calculator' />
			<CalculatorBox />
		</section>
	)
}

export default CalculatorApp
