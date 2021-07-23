import React, {useEffect} from "react";
import {Container, Table, Row, Col} from "react-bootstrap";
import styles from "../../styles/profileComponent.module.css";
import Link from "next/link";
import Image from "next/image";

import {useRouter} from "next/router";
// REDUX
import {getProfile} from "../../redux/actions/profile";
import {useSelector, useDispatch} from "react-redux";

export default function Userprofilecomponent() {
	const router = useRouter();
	// GET STORE FROM REDUX
	const token = useSelector((state) => state.auth?.token);
	const dataProfile = useSelector((state) => state.profile.profile);
	const dispatch = useDispatch();
	console.log(token);
	useEffect(() => {
		if (token == null) {
			router.push("/login");
		}
		dispatch(getProfile(token));
	}, []);

	console.log(dataProfile);

	return (
		<Container fluid>
			<h1 className={`${styles.mobileCenter} mt-5`}>Your Profile</h1>
			<Row className="flex-wrap justify-content-center">
				<Col sm={12} md={6} className={`${styles.mobileCenter} text-center `}>
					<img className="mx-3" alt="gambar profile" src="/assets/images/profile.jpg" />
				</Col>
				<Col sm={12} md={6} className={`${styles.mobileCenter} text-center`}>
					<Table responsive borderless className="px-3">
						<tbody>
							<tr>
								<td>Username</td>
								<td>{dataProfile.username}</td>
							</tr>
							<tr>
								<td>Email</td>
								<td>{dataProfile.email}</td>
							</tr>
							<tr>
								<td>score</td>
								<td>{dataProfile.score}</td>
							</tr>
							<tr>
								<td>Biodata</td>
								<td>{dataProfile.biodata}</td>
							</tr>
							<tr>
								<td>Sosmed</td>
								<td>{dataProfile.social_media_url}</td>
							</tr>
							<tr>
								<td>City</td>
								<td>{dataProfile.city?.name}</td>
							</tr>
						</tbody>
					</Table>
					<Link href="/profile/update" className="text-center" onClick="">
						<button className="btn btn-outline-info">Update</button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
}
