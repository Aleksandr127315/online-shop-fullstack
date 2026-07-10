import styles from './EmptyState.module.scss';

export const EmptyState = ({
	title = 'No products found',
	description = 'Try changing the filters.',
}) => {
	return (
		<div className={styles.empty}>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};
