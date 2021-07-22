import React, {useEffect} from "react";
import {Container, Table} from "react-bootstrap";
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
		<Container className={styles.container}>
			<h1 className={`${styles.mobileCenter} mt-5`}>Your Profile</h1>
			<div className="row d-flex">
				<div className={`${styles.mobileCenter} col-sm-md-lg-6`}>
					<Image className="mx-3" width={100} alt="gambar profile" src="https://pbs.twimg.com/media/DhsRKlhUEAAc50O.jpg" />
				</div>
				<div className={`${styles.mobileCenter} col-sm-md-lg-6`}>
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
							<tr>
								<td>
									<Link href="/profile/update" className="" onClick="">
										<button class="btn btn-outline-info">Update</button>
									</Link>
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		</Container>
	);
}
