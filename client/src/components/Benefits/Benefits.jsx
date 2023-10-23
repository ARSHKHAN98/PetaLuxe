import React from "react";
import styles from "./Benefits.module.css";
import { BsCheck2Circle } from "react-icons/bs";

const Intro = (props) => {
	// console.log(props);
	const scrollToSection = () => {
		if (props.productRef.current) {
			props.productRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	};
	return (
		<div ref={props.benefitRef} className={styles.container}>
			<div className={styles.head}>Petaluxe Rose Water: Enhancing Skin and Wellness</div>
			<div className={styles.desc}>
				<div className={styles.points}>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Hyderation: <span className={styles.pbody}>Rose water helps maintain the skin&#39;s natural moisture balance, keeping it hydrated and refreshed.</span>
						</div>
					</div>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Skin Toning: <span className={styles.pbody}>It acts as a gentle toner, helping to tighten pores and even out the skin tone.</span>
						</div>
					</div>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Soothing: <span className={styles.pbody}>It acts as a gentle toner, helping to tighten pores and even out the skin tone.</span>
						</div>
					</div>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Anti-Aging: <span className={styles.pbody}>The antioxidants in rose water can help combat free radicals, promoting a more youthful appearance.</span>
						</div>
					</div>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Acne Control: <span className={styles.pbody}>Its antibacterial properties make it useful for controlling and preventing acne breakouts.</span>
						</div>
					</div>
				</div>
				<div className={styles.points}>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Refreshment: <span className={styles.pbody}>A spritz of rose water can provide an instant refreshment, especially on a hot day or after a workout.</span>
						</div>
					</div>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Aromatherapy: <span className={styles.pbody}>The delicate aroma of rose water can have a calming and mood-lifting effect, promoting relaxation.</span>
						</div>
					</div>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Hair Care: <span className={styles.pbody}> Rose water can be used as a hair rinse to nourish the scalp and add shine to hair strands.</span>
						</div>
					</div>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Makeup Remover: <span className={styles.pbody}>It can be a gentle and natural way to remove makeup without harsh chemicals.</span>
						</div>
					</div>
					<div className={styles.point}>
						<div className={styles.phead}>
							<BsCheck2Circle /> Stress Relief: <span className={styles.pbody}>Incorporating rose water into baths or facial treatments can contribute to stress relief and relaxation.</span>
						</div>
					</div>
				</div>
			</div>
			<button onClick={scrollToSection} className={styles.button}>
				Buy Now
			</button>
		</div>
	);
};

export default Intro;
