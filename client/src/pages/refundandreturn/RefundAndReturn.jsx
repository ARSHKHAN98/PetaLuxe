import React, { useEffect } from "react";
import styles from "./RefundAndReturn.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const RefundAndReturn = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className={styles.container}>
			<Navigation />
			<div className={styles.subcontainer}>
				<div className={styles.mainhead}>Return Policy</div>
				<div className={styles.para}>We don't have refund and return policy.</div>
			</div>
			<Footer />
		</div>
	);
};

export default RefundAndReturn;
