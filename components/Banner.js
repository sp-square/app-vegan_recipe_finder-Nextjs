import styles from './Banner.module.css';

const Banner = (props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<span className={styles.title1}>Assiette</span>
				<span className={styles.title2}>Verte</span>
			</h1>
			<p className={styles.subtitle}>Discover plant-based recipes!</p>
			<div className={styles.buttonWrapper}>
				<button className={styles.button} onClick={props.handleOnClick}>
					{props.buttonText}
				</button>
			</div>
		</div>
	);
};

export default Banner;
