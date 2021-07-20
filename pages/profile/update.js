import React, {useRef, useState, useEffect} from "react";
import {Container, Button,Row,Col} from "react-bootstrap";
import styles from "../../styles/editProfileComponent.module.css";
import Link from "next/link";
// axios
import api from "axios";
// REDUX
import {updateProfile} from "../../redux/actions/profile";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";

export default function Userprofilecomponent({userData}) {
	// REDUX
    const dataProfile = useSelector((state) => state.profile.profile);
	const token = useSelector((state) => state.auth?.token);
	const [city, setCity] = useState(null);
	const dispatch = useDispatch();
	// -------GET VALUE FROM FORM INPUT
	const emailRef = useRef();
	const bioRef = useRef();
	const userRef = useRef();
	const sosmedRef = useRef();
	const cityRef = useRef();
	
	// GET CITY API
	useEffect(() => {
		axios
			.get("https://ch10-fsw7-challenge-be.herokuapp.com/api/city", {
				headers: {
					Authorization: token,
				},
			})
			.then((res) => setCity(res?.data?.data));
	}, []);
	
    


	const update = (e) => {
		dispatch(updateProfile(token, userRef.current.value, cityRef.current.value, emailRef.current.value, bioRef.current.value, sosmedRef.current.value));
	};

	return (
		<Container className={` styles.container`}>
			<Row className="d-flex justify-content-between">
            <Col className="d-flex flex-column justify-content-center align-items-center" md={6}>
				<h1 className={`${styles.mobileCenter} text-center mt-3`}>Your Profile</h1>
				<div >
					<div className={`${styles.mobileCenter} col-sm-md-lg-6`}>
						<img className="mx-3" alt="gambar profile" src="https://pbs.twimg.com/media/DhsRKlhUEAAc50O.jpg" />
					</div>
				</div>
			</Col>
            <Col md={6}>
			<div className={`${styles.mobileCenter} col-sm-md-lg-6`}>
				<div className="my-4">
					<label className="form-label">Username</label>
					<input required ref={userRef} type="text" className="form-control" placeholder={dataProfile.username} />
				</div>
				<div className="mb-3">
					<label className="form-label">Email address</label>
					<input required ref={emailRef} className="form-control" type="email" placeholder={dataProfile.email} />
				</div>
				<div className="mb-3">
					<label className="form-label">Biodata</label>
					<input required ref={bioRef} className="form-control" type="text" placeholder={dataProfile.biodata} />
				</div>
				<div className="mb-3">
					<label className="form-label">City</label>
					<select ref={cityRef} className="form-control" aria-label="Default select example">
						{city !== null &&
							city.map((item, index) => {
								return (
									<option key={index} value={item.id}>
										{item.name}
									</option>
								);
							})}
					</select>
				</div>
				<div className="mb-3">
					<label className="form-label">Social Media</label>
					<input required ref={sosmedRef} className="form-control" type="text" placeholder={dataProfile.sosmed} />
				</div>
				<Link href="/profile">
					<Button onClick={update} variant="danger" type="submit">
						Submit
					</Button>
				</Link>
			</div>
            </Col>
            </Row>
		</Container>
	);
}