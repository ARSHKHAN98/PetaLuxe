import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import style from "./Product.module.css";
import axios from "axios";
import { setUser } from "../../store/authSlice.js";

const Product = (props) => {
	const [count, setCount] = useCookies(["productCount"]);
	const { user } = useSelector((state) => state.auth);
	const { auth } = useSelector((state) => state.auth);

	const dispatch = useDispatch();
	const history = useNavigate();

	const handleAdd = async (e) => {
		e.preventDefault();
		try {
			setCount("productCount", count.productCount + 1, { expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) });
			if (auth) {
				const updatedCart = await axios.post("http://localhost:4000/api/cart", { _id: user._id, product: count.productCount + 1 }, { withCredentials: true });
				const { password, ...details } = updatedCart.data;
				dispatch(setUser(details));
			}
			history("/cart");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div ref={props.productRef} className={style.container}>
			<div className={style.subcontainer}>
				<div className={style.left}>
					<div className={style.head}>Product Description</div>
					<div className={style.desc}>Our 'Petaluxe' Rose Water is hydro distilled using the same age-old method devised about 400 years ago from Kannauj. Our Rose Water is freshly prepared from the world-famous 'Rose of Kannauj.' It takes around 1 mana (40 kg) of Damask Rose petals to make 20L of our organic 'Petaluxe' Rose Water. It works as a natural toner for all skin types and also helps to remove excess oil, prevent acne, pimples, rashes, and irritation. We don't add preservatives to our Rose Water, so we recommend our Rose Water should be kept stored in the refrigerator and away from direct sunlight from the time of purchase.</div>
				</div>
				<div className={style.right}>
					<img className={style.image} src="https://www.rawconcoctions.com/cdn/shop/products/IMG_4520_Original.jpg?v=1653404112&width=990" alt="ZOFLA"></img>
				</div>
			</div>
			<button className={style.button} onClick={handleAdd}>
				ADD TO CART
			</button>
		</div>
	);
};

export default Product;
