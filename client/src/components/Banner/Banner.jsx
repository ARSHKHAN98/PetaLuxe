import React from "react";
import styles from "./Banner.module.css";

const Banner = (props) => {
	const scrollToSection = () => {
		if (props.benefitRef.current) {
			props.benefitRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<img className={styles.image} src="https://www.rawconcoctions.com/cdn/shop/products/IMG_4520_Original.jpg?v=1653404112&width=990" alt="ZOFLA"></img>
			</div>
			<div className={styles.right}>
				<div className={styles.head}>Introducing PetaLuxe Rose Water</div>
				<div className={styles.desc}>Capturing the Essence of Kannauj's Finest Roses!, Indulge in the luxury of Petaluxe Rose Water, crafted exclusively from the world renowned Kannauj roses. Known for their unmatched fragrance and purity, our rose water embodies the timeless beauty and traditions of this historic region. Each delicate petal is handpicked and hydro distilled with precision to ensure a fragrance that's as authentic as the roses themselves. Experience the essence of Kannauj's heritage in every bottle of Petaluxe, a true testament to the artistry that goes into creating this exquisite rose water. Elevate your skincare and wellness routine with Petaluxe Rose Water – a symbol of elegance, authenticity, and the aromatic legacy of Kannauj.</div>
				<button onClick={scrollToSection} className={styles.button}>
					Learn More
				</button>
			</div>
		</div>
	);
};

export default Banner;
