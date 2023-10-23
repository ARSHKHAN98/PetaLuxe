import React from "react";
import style from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = () => {
	const history = useNavigate();
	return (
		<div className={style.container}>
			<div className={style.bar}></div>
			<div className={style.subcontainer}>
				<div className={style.left}>
					<div className={style.logo}>LOGO</div>
					<div className={style.desc}>Experience Kannauj's heritage in Petaluxe Rose Water—a symbol of elegance and authenticity. Crafted exclusively from the finest Kannauj roses, it elevates your skincare and wellness. Immerse yourself in the fragrance of tradition</div>
				</div>
				<div className={style.right}>
					<div className={style.col1}>
						<div className={style.col} onClick={() => history("/termsandconditions")}>
							Terms & Conditions
						</div>
						<div className={style.col} onClick={() => history("/refundpolicy")}>
							Return Policy
						</div>
						<div className={style.col} onClick={() => history("/shippingpolicy")}>
							Shipping Policy
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
