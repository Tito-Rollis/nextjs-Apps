import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import Link from "next/Link";
import {nav, auth} from "../styles/HeaderComponent.module.css";
// REDUX
import {logout} from "../redux/actions/auth";
import {useSelector, useDispatch} from "react-redux";

export default function HeaderComponent() {
	// GET STORE FROM REDUX
	const token = useSelector((state) => state.auth?.token);
	// REDUX ACTION
	const dispatch = useDispatch();
	const userLogout = () => dispatch(logout());
	return (
		<Navbar className={`${nav} d-flex align-items-center justify-content-between`} expand="lg" variant="dark" sticky="top" collapseOnSelect>
			<Navbar.Brand>
				<h1 className="ms-3 my-md-3">
					TEAM <strong>FSW 7</strong>
				</h1>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="text-right">
				<Nav className="me-md-4 mx-3 align-items-lg-center align-items-end">
					<Nav.Link className="me-0 me-md-4">
						<Link href="/">Home</Link>
					</Nav.Link>
					<Nav.Link>
						<Link href="/games">Games</Link>
					</Nav.Link>
				</Nav>
				<Nav className={`${auth} mx-3 align-items-lg-center align-items-lg-center align-items-end`}>
					{token != null ? (
						<>
							<Nav.Link>
								<Link exact href="/profile">
									Profil
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link exact href="/">
									<Button onClick={userLogout} className="px-4 py-2" style={{fontWeight: "500", letterSpacing: "2px"}} variant="warning">
										Log Out
									</Button>
								</Link>
							</Nav.Link>
						</>
					) : (
						<>
							<Nav.Link className="me-md-4">
								<Link href="/register">Register</Link>
							</Nav.Link>
							<Nav.Link>
								<Button style={{fontWeight: "500", letterSpacing: "10px !important"}} variant="danger">
									<Link href="/login">Login</Link>
								</Button>
							</Nav.Link>
						</>
					)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
