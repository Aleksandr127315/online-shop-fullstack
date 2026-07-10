import styles from './Error.module.scss';

export const Error = ({ message }) => {
	return (
		<div className={styles.error}>
			<h3>Oops!</h3>
			<p>{message || 'Something went wrong.'}</p>
		</div>
	);
};
