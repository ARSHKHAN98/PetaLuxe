import React from "react";
import styles from "./Shipping.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";

const Shipping = () => {
	return (
		<div className={styles.container}>
			<Navigation />
			<div className={styles.subcontainer}>
				<div className={styles.mainhead}>Shipping Policy</div>
				<div className={styles.para}>We ship orders within 0-2 working days through DTDC or Delivery as our preferred logistics partners, and the shipping companies usually take 5-7 working days to deliver, depending on the location. Sometimes in case of rare situations, orders might also take 8-10 business days to get delivered. Note: All our products are non- returnable. In case of a damaged product receipt, please refer to our damage claim policy in our FAQs.</div>
			</div>
			<Footer />
		</div>
	);
};

export default Shipping;
