import React, {useEffect, useRef, useState} from "react";
import Footer from "../../components/FooterComponent";
// REDUX
import {reset, cleanUp} from "../../redux/actions/auth";
import {useSelector, useDispatch} from "react-redux";
// Bootstrap
import {Card, Form} from "react-bootstrap";
// import CSS
import styles from "../../styles/login.module.css";
// Route
import {useRouter} from "next/router";

function Reset() {
	const router = useRouter();
	const token = router.query.token;
	// ------CREATE STATE
	const [loadingColor, setLoadingColor] = useState(styles.button);
	const [loadingText, setLoadingText] = useState("Submit");
	const [disabled, setDisabled] = useState("");
	const [display, setDisplay] = useState(styles.displayNone);
	// -------GET VALUE FROM FORM INPUT
	const passRef = useRef();
	const statusSuccess = useSelector((state) => state.auth.users?.status ?? null);
	const statusFailed = useSelector((state) => state.auth?.users ?? null);
	const dispatch = useDispatch();

	const userReset = (e) => {
		e.preventDefault();
		// ------LOADING SETTING
		setLoadingColor(styles.loading);
		setLoadingText("Loading");
		setDisabled("disabled");
		dispatch(reset(token, passRef.current.value));
	};

	useEffect(() => {
		// CLEANUP STATUS
		dispatch(cleanUp());
		// REDIRECT KETIKA BERHASIL
		if (statusSuccess != null && statusSuccess == 200) {
			router.push("/login");
		}
		// REDIRECT KETIKA GAGAL
		if (statusFailed === 401) {
			router.push({
				pathname: "/reset/[token]",
				query: {token},
			});
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
						<h1 className="mb-4">Reset Password</h1>
						<Form>
							<Form.Group id="password">
								<Form.Label>Enter New Password</Form.Label>
								<Form.Control ref={passRef} type="password"></Form.Control>
							</Form.Group>
							<div className={display}>
								<p>
									Password reset token is invalid <span style={{fontWeight: 700, color: "rgb(255 193 129)"}}>or has expired.</span>
								</p>
								<p>Please try again!</p>
							</div>

							<button onClick={userReset} className={`${loadingColor} ${disabled} btn mt-4`} type="submit" value="submit">
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

export default Reset;
