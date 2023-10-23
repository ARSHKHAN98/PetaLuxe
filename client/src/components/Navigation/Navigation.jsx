import React from "react";
import style from "./Navigation.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import image from "../../images/LogoLight.png";
import { useDispatch } from "react-redux";
import { setUser, setAuth } from "../../store/authSlice.js";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router";

const Navigation = () => {
	const { auth } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const history = useNavigate();

	const handleLogout = async (e) => {
		e.preventDefault();
		try {
			await axios.get("http://localhost:4000/api/logout", { withCredentials: true });
			dispatch(setUser(null));
			dispatch(setAuth({ auth: false }));
		} catch (err) {
			console.log(err);
		}
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		history("/login");
	};

	return (
		<div className={style.container}>
			<div className={style.right}>
				<Link to="/" className={style.carticon}>
					<div className={style.logo}>Logo</div>
				</Link>
			</div>
			<div className={style.center}></div>
			<div className={style.left}>
				<div className={style.cart}>
					<Link to="/cart" className={style.carticon}>
						<AiOutlineShoppingCart size={30} />
					</Link>
				</div>
				<div size={30}>
					{auth ? (
						<span onClick={handleLogout} className={style.button}>
							Logout
						</span>
					) : (
						<span onClick={handleLogin} className={style.button}>
							Login
						</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navigation;
