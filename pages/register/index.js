import React, {useEffect, useRef, useState} from "react";
import Footer from "../../components/FooterComponent";
// REDUX
import {register, cleanUp} from "../../redux/actions/auth";
import {useSelector, useDispatch} from "react-redux";
// Bootstrap
import {Card, Form} from "react-bootstrap";
// import CSS
import styles from "../../styles/register.module.css";
// Route
import {useRouter} from "next/router";

function Register() {
	const router = useRouter();
	// ------CREATE STATE
	const [loadingColor, setLoadingColor] = useState(styles.button);
	const [loadingText, setLoadingText] = useState("Register");
	const [disabled, setDisabled] = useState("");

	// -------GET VALUE FROM FORM INPUT
	const emailRef = useRef();
	const passRef = useRef();
	const userRef = useRef();
	// GET STORE FROM REDUX
	const statusSuccess = useSelector((state) => state.auth.users ?? null);
	const statusFailed = useSelector((state) => state.auth?.users ?? null);
	const dispatch = useDispatch();

	const userRegistry = (e) => {
		e.preventDefault();
		setLoadingColor(styles.loading);
		setLoadingText("Loading");
		setDisabled("disabled");

		dispatch(register(userRef.current.value, emailRef.current.value, passRef.current.value));
	};

	useEffect(() => {
		// CLEANUP STATUS
		dispatch(cleanUp());
		// REDIRECT
		if (statusSuccess == 201 && statusSuccess != null) {
			router.push("/login");
		}
		if (statusFailed === 422) {
			router.push("/register");
			setLoadingColor(styles.button);
			setLoadingText("Register");
			setDisabled("");
		}
	}, [statusSuccess, statusFailed]);

	return (
		<>
			<div className={`${styles.Register} d-flex align-items-center justify-content-center`}>
				<Card
					style={{
						maxWidth: "600px",
						minWidth: "400px",
						borderRadius: "5px",
						backgroundColor: "#ffffff2e",
					}}
					className={`d-flex justify-content-center`}
				>
					<Card.Body className="text-center w-100">
						<h1 className="mb-4">Register</h1>
						<Form onSubmit={userRegistry}>
							<Form.Group className="mb-4" id="username">
								<Form.Label>Username</Form.Label>
								<Form.Control ref={userRef} type="text"></Form.Control>
							</Form.Group>
							<Form.Group className="mb-4" id="email">
								<Form.Label>Email</Form.Label>
								<Form.Control ref={emailRef} type="email"></Form.Control>
							</Form.Group>
							<Form.Group className="mb-4" id="password">
								<Form.Label>Password</Form.Label>
								<Form.Control ref={passRef} type="password"></Form.Control>
							</Form.Group>
							<button className={`${loadingColor} ${disabled} btn`} type="submit" value="submit">
								{loadingText}
							</button>
						</Form>
						{statusFailed != null && (
							<div>
								<p>
									Email <span style={{fontWeight: 700, color: "rgb(255 193 129)"}}>must be</span> unique!
								</p>
								<p>Please try again!</p>
							</div>
						)}

						<div class="w-100 text-center mt-3">
							Already have an account ?
							<a className={`${styles.login} ms-2`} href="/login">
								Log In
							</a>
						</div>
					</Card.Body>
				</Card>
			</div>
			<Footer />
		</>
	);
}

export default Register;
