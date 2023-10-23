import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
import RefundAndReturn from "./pages/refundandreturn/RefundAndReturn";
import Terms from "./pages/terms/Terms";
import Shipping from "./pages/shipping/Shipping";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteUser, setAuth } from "./store/authSlice";

// useeffect se ek endpoint se accesstoekn check check krna hai backend me or accordingly redux

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const func = async () => {
			try {
				const accessToken = await axios.post("http://localhost:4000/api/check", { check: true }, { withCredentials: true });
				if (accessToken.data === "Re-login") {
					dispatch(deleteUser());
					dispatch(setAuth(false));
				}
			} catch (err) {
				console.log(err);
			}
		};
		func();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/login" element={<Login />}></Route>
				<Route exact path="/signup" element={<Register />}></Route>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/cart" element={<Cart />}></Route>
				<Route exact path="/refundpolicy" element={<RefundAndReturn />}></Route>
				<Route exact path="/termsandconditions" element={<Terms />}></Route>
				<Route exact path="/shippingpolicy" element={<Shipping />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
