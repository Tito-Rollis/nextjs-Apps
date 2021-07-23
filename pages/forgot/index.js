import React, {useEffect, useRef, useState} from "react";
import Footer from "../../components/FooterComponent";
// REDUX
import {forgot, cleanUp} from "../../redux/actions/auth";
import {useSelector, useDispatch} from "react-redux";
// Bootstrap
import {Card, Form} from "react-bootstrap";
// import CSS
import styles from "../../styles/login.module.css";
// Route
import {useRouter} from "next/router";

function Forgot() {
	const router = useRouter();
	// ------CREATE STATE
	const [loadingColor, setLoadingColor] = useState(styles.button);
	const [loadingText, setLoadingText] = useState("Submit");
	const [disabled, setDisabled] = useState("");
	const [display, setDisplay] = useState(styles.displayNone);
	const [berhasil, setBerhasil] = useState(styles.displayNone);
	// -------GET VALUE FROM FORM INPUT
	const emailRef = useRef();
	const statusSuccess = useSelector((state) => state.auth.users?.status ?? null);
	const statusFailed = useSelector((state) => state.auth?.users ?? null);
	const dispatch = useDispatch();

	const userForgot = (e) => {
		e.preventDefault();
		// ------LOADING SETTING
		setLoadingColor(styles.loading);
		setLoadingText("Loading");
		setDisabled("disabled");
		dispatch(forgot(emailRef.current.value));
	};

	useEffect(() => {
		// CLEANUP STATUS
		// dispatch(cleanUp());
		// REDIRECT KETIKA BERHASIL
		if (statusSuccess != null && statusSuccess == 200) {
			setBerhasil("");
			router.push("/forgot");
			setLoadingColor(styles.button);
			setLoadingText("Log In");
			setDisabled("");
		}
		// REDIRECT KETIKA GAGAL
		if (statusFailed === 401) {
			router.push("/forgot");
			setDisplay("");
			setLoadingColor(styles.button);
			setLoadingText("Log In");
			setDisabled("");
		}
	}, [statusSuccess, statusFailed]);

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
						<h1 className="mb-4">Forgot Password</h1>
						<Form>
							<Form.Group className="mb-4" id="email">
								<Form.Label>Email</Form.Label>
								<Form.Control ref={emailRef} type="email"></Form.Control>
							</Form.Group>
							<div className={display}>
								<p>
									No account <span style={{fontWeight: 700, color: "rgb(255 193 129)"}}>with that email address exists!!!</span>
								</p>
								<p>Please try again!</p>
							</div>

							<div className={berhasil}>
								<p>
									email sent, <span style={{fontWeight: 700, color: "rgb(255 193 129)"}}>please cek your email</span>
								</p>
							</div>

							<button onClick={userForgot} className={`${loadingColor} ${disabled} btn`} type="submit" value="submit">
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

export default Forgot;
