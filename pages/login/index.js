import React, {useEffect, useRef, useState} from "react";
import Footer from "../../components/FooterComponent";
// REDUX
import {login} from "../../redux/actions/auth";
import {useSelector, useDispatch} from "react-redux";
// Bootstrap
import {Card, Form} from "react-bootstrap";
// import CSS
import styles from "../../styles/login.module.css";
// Route
import {useRouter} from "next/router";

function Login(props) {
	const router = useRouter();
	// ------CREATE STATE
	const [loadingColor, setLoadingColor] = useState(styles.button);
	const [loadingText, setLoadingText] = useState("Log In");
	const [disabled, setDisabled] = useState("");
	const [display, setDisplay] = useState(styles.displayNone);
	// -------GET VALUE FROM FORM INPUT
	const emailRef = useRef();
	const passRef = useRef();
	const statusSuccess = useSelector((state) => state.auth.users?.status ?? null);
	const statusFailed = useSelector((state) => state.auth?.users ?? null);
	const dispatch = useDispatch();

	const userLogin = (e) => {
		e.preventDefault();
		// ------LOADING SETTING
		setLoadingColor(styles.loading);
		setLoadingText("Loading");
		setDisabled("disabled");
		dispatch(login(emailRef.current.value, passRef.current.value));
	};

	useEffect(() => {
		// REDIRECT KETIKA BERHASIL LOGIN
		if (statusSuccess != null && statusSuccess == 200) {
			router.push("/profile");
		}
		// REDIRECT KETIKA GAGAL LOGIN
		if (statusFailed === 401) {
			router.push("/login");
			setDisplay("");
			setLoadingColor(styles.button);
			setLoadingText("Log In");
			setDisabled("");
		}
	}, [statusSuccess, statusFailed]);

	console.log(statusSuccess, statusFailed);

	return (
		<>
			<div className={`${styles.Login} d-flex align-items-center justify-content-center`}>
				<Card
					style={{
						maxWidth: "600px",
						minWidth: "400px",
						borderRadius: "5px",
						backgroundColor: "#ffffff2e",
					}}
					className={`d-flex justify-content-center`}
				>
					<Card.Body className="w-100 text-center">
						<h1 className="mb-4">Login</h1>
						<Form>
							<Form.Group className="mb-4" id="email">
								<Form.Label>Email</Form.Label>
								<Form.Control ref={emailRef} type="email"></Form.Control>
							</Form.Group>
							<Form.Group className="mb-4" id="password">
								<Form.Label>Password</Form.Label>
								<Form.Control ref={passRef} type="password"></Form.Control>
							</Form.Group>
							<div className={display}>
								<p>
									Email or Password <span style={{fontWeight: 700, color: "rgb(255 193 129)"}}>wrong!</span>
								</p>
								<p>Please try again!</p>
							</div>

							<button onClick={userLogin} className={`${loadingColor} ${disabled} btn`} type="submit" value="submit">
								{loadingText}
							</button>
						</Form>
					</Card.Body>
				</Card>
			</div>
			<Footer />
		</>
	);
}

export default Login;
