import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "./Register.module.css";

const Register = () => {
	const history = useNavigate();
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [err, setErr] = useState("");

	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	};

	const handleClick = async (e) => {
		e.preventDefault();
		if (firstName.length === 0 || lastName.length === 0) setErr("Please enter a valid first name and last name ");
		else if (!validateEmail(email)) setErr("Please enter a valid email addresss");
		else if (phone.length <= 8) setErr("Please enter a valid 10 digit Phone Number");
		else if (password.length <= 8) setErr("Please enter a valid min 8 character password");
		else if (password !== confirmPassword) setErr("Password doesn't match with Confirm Password");
		else {
			try {
				await axios.post("http://localhost:4000/api/register", { firstName, lastName, password, email, phone });
				history("/login");
			} catch (error) {
				setErr(error.response.data.message);
			}
		}
	};
	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<h1 className={style.title}>Register</h1>
				<form className={style.form}>
					<div className={style.name}>
						<input className={style.input} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
						<input className={style.input} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
					</div>
					<input className={style.input} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
					<input className={style.input} type="text" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value)} />
					<input className={style.input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
					<input className={style.input} type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
					<div className={style.contain}>
						<button className={style.button} onClick={handleClick}>
							Register
						</button>
						{err !== "" && <div className={style.error}>{err}</div>}
						<div className={style.link} onClick={() => history("/login")}>
							Already Have An Account?
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
