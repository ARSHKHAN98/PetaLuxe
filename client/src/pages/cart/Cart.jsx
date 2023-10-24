import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice.js";
import axios from "axios";

const Cart = () => {
	const [count, setCount] = useCookies(["productCount"]);
	const { auth } = useSelector((state) => state.auth);
	const { user } = useSelector((state) => state.auth);
	const [val, setVal] = useState(Number(count.productCount) ? Number(count.productCount) : 0);
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleChange = async (e) => {
		if (e.key === "Enter" && e.target.value >= 0) {
			e.preventDefault();
			try {
				if (e.target.value === "") e.target.value = 0;
				setCount("productCount", e.target.value, { maxAge: 30 * 24 * 60 * 60 });
				setVal(Number(e.target.value));
				if (auth) {
					const updatedCart = await axios.post("http://localhost:4000/api/cart", { _id: user._id, product: val }, { withCredentials: true });
					const { password, ...details } = updatedCart.data;
					dispatch(setUser(details));
				}
			} catch (err) {
				console.log(err);
			}
		}
	};
	const handleAdd = async (e) => {
		e.preventDefault();
		try {
			setCount("productCount", val + 1, { maxAge: 30 * 24 * 60 * 60 });
			setVal(Number(val + 1));
			if (auth) {
				const updatedCart = await axios.post("http://localhost:4000/api/cart", { _id: user._id, product: val + 1 }, { withCredentials: true });
				const { password, ...details } = updatedCart.data;
				dispatch(setUser(details));
			}
		} catch (err) {
			console.log(err);
		}
	};
	const handleSubtract = async (e) => {
		e.preventDefault();
		try {
			if (Number(count.productCount) > 0) {
				setCount("productCount", val - 1, { maxAge: 30 * 24 * 60 * 60 });
				setVal(Number(val) - 1);
				if (auth) {
					const updatedCart = await axios.post("http://localhost:4000/api/cart", { _id: user._id, product: val - 1 }, { withCredentials: true });
					const { password, ...details } = updatedCart.data;
					dispatch(setUser(details));
				}
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={styles.container}>
			<Navigation />
			<div className={styles.subcontainer}>
				<div className={styles.leftheadhidden}>
					<span className={styles.shop}>Shopping Cart</span>
				</div>
				<div className={styles.left}>
					<div className={styles.lefthead}>
						<span className={styles.shop}>Shopping Cart</span>
					</div>
					<div className={styles.bar}></div>
					<div className={styles.titles}>
						<span className={styles.hname}>Product Detail</span>
						<span className={styles.hqty}> Quantity</span>
						<span className={styles.hprice}>Price</span>
						<span className={styles.htotal}>Total Price</span>
					</div>
					<div className={styles.content}>
						<span className={styles.details}>
							<img className={styles.image} src="https://www.rawconcoctions.com/cdn/shop/products/IMG_4520_Original.jpg?v=1653404112&width=990" alt="ZOFLA"></img>
						</span>
						<span className={styles.qty}>
							<span className={styles.plus} onClick={handleAdd}>
								+
							</span>
							<input placeholder="0" value={val} type="number" className={styles.count} onKeyDown={handleChange} onChange={(e) => setVal(e.target.value)}></input>
							<span className={styles.minus} onClick={handleSubtract}>
								-
							</span>
						</span>
						<span className={styles.price}>₹ 399</span>
						<span className={styles.total}>₹ {val * 399}</span>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.rhead}>Order Summary</div>
					<div className={styles.bar}></div>
					<div className={styles.costs}>
						<div className={styles.cost}>
							<span className={styles.charge}>Total Cost</span>
							<span className={styles.rupees}>₹ {val * 399}</span>
						</div>
						<div className={styles.cost}>
							<span className={styles.charge}>Shipping Charges</span>
							<span className={styles.rupees}>₹ {val >= 3 || val === 0 ? 0 : 75}</span>
						</div>
						<div className={styles.cost}>
							<span className={styles.charge}>Tax</span>
							<span className={styles.rupees}>₹ {Math.ceil((val * 399 * 18) / 100)}</span>
						</div>
						<div className={styles.bar}></div>
						<div className={styles.cost}>
							<span className={styles.charge}>Total Cost</span>
							<span className={styles.rupees}>₹ {val * 399 + (val >= 3 ? 0 : 75) + Math.ceil((val * 399 * 18) / 100)}</span>
						</div>
						<button className={styles.button}>Checkout</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Cart;
