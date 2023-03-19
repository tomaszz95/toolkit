import styles from './AppsTitle.module.css'

const AppsTitle = ({ title }) => {
	return (
		<div className={styles.box}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.line} />
		</div>
	)
}

export default AppsTitle
