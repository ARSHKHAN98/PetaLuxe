import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { setUser, setAuth } from "../../store/authSlice.js";
import styles from "./Login.module.css";

const Login = () => {
	const history = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");
	const dispatch = useDispatch();

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	};

	const handleClick = async (e) => {
		e.preventDefault();
		try {
			if (email.length === 0 || password.length === 0) setErr("Please provide email and password");
			else if (!validateEmail(email)) setErr("Please provide a valid email address");
			else {
				const user = await axios.post("http://localhost:4000/api/login", { email, password }, { withCredentials: true });
				dispatch(setUser(user.data));
				dispatch(setAuth({ auth: true }));
				setErr("");
				history("/");
			}
		} catch (error) {
			setErr("Incorrect Password/Email");
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.title}>Log In</div>
				<div className={styles.form}>
					<input className={styles.input} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
					<input className={styles.input} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
					<div className={styles.contain}>
						<div className={styles.button} onClick={handleClick}>
							Login
						</div>
						{err !== "" && <div className={styles.error}>{err}</div>}
						<div className={styles.link} onClick={() => history("/signup")}>
							Create An Account?
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
