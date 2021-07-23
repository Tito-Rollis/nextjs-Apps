import React from "react";
import {Row, Col} from "react-bootstrap";
import styles from "../styles/FooterComponent.module.css";
import Link from "next/link";
import Image from "next/image";

function FooterComponent() {
	return (
		<div className={`${styles.container} container-fluid py-5`}>
			<Row className="d-flex flex-wrap justify-content-between py-sm-5 ">
				<Col className="d-flex justify-content-start " sm={12} md={4}>
					<p className="h2" style={{color: "white"}}>
						TEAM <strong style={{fontWeight: "700"}}>FSW 7</strong>
					</p>
				</Col>

				<Col md={4} sm={12} className="d-flex flex-column py-3 py-md-0 align-items-start">
					<h3 className={`${styles.items} mt-sm-2`}>Explore</h3>
					<ul className={`${styles.items} px-0 mt-md-3 d-flex flex-column align-items-start`}>
						<li>
							<Link className={`${styles.items}`} href="/">
								Home
							</Link>
						</li>
						<li>
							<Link className={`${styles.items}`} href="/game">
								Games
							</Link>
						</li>
					</ul>
				</Col>

				<Col md={4} sm={12} className="d-flex  flex-column align-items-start">
					<h3 className={styles.items}>Social Media</h3>
					<ul className={`${styles.iconContainer} mt-0 mt-md-3 flex-wrap d-flex justify-content-start px-0`}>
						<li className="pe-3 py-3 py-md-0">
							<Image src="/assets/icons/fb.png" width={50} height={50} alt="sosmed icon" />
						</li>
						<li className="pe-3 py-3 py-md-0">
							<Image src="/assets/icons/twit.png" width={50} height={50} alt="sosmed icon" />
						</li>
						<li className="pe-3 py-3 py-md-0">
							<Image src="/assets/icons/google.png" width={50} height={50} alt="sosmed icon" />
						</li>
						<li className="pe-3 py-3 py-md-0">
							<Image src="/assets/icons/ig.png" width={50} height={50} alt="sosmed icon" />
						</li>
						<li className="pe-3 py-3 py-md-0">
							<Image src="/assets/icons/in.png" width={50} height={50} alt="sosmed icon" />
						</li>
						<li className="pe-3 py-3 py-md-0">
							<Image src="/assets/icons/github.png" width={50} height={50} alt="sosmed icon" />
						</li>
					</ul>
				</Col>
			</Row>
		</div>
	);
}

export default FooterComponent;
