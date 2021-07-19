import React, {useState, useEffect} from "react";
import {Jumbotron, Button, Container} from "react-bootstrap";
import Link from "next/link";
import {jumbotronCustom} from "../styles/JumbotronComponent.module.css";

const JumbotronComponent = () => {
	const [styles, setStyle] = useState({
		letterSpacing: "2px",
		fontWeight: "500",
		color: "rgba(255, 255, 255, 0)",
		transform: "translateX(-50%)",
	});
	const [x, setState] = useState(false);
	useEffect(() => {
		setState(true);
		if (x) {
			setStyle({
				letterSpacing: "2px",
				fontWeight: "500",
				color: "white",
				transform: "translateX(0%)",
				transition: "all 1.3s",
			});
		}
	}, [x]);

	return (
		<div className="text-center">
			<Jumbotron fluid className={jumbotronCustom}>
				<Container>
					<h1 style={styles} className={`py-2 my-2`}>
						PLAY TRADITIONAL GAME
					</h1>
					<p style={styles} className={`py-2 my-3 `}>
						Experience New Traditional Game
					</p>
					<p>
						<Button className="px-4 py-2" variant="danger">
							<Link href="/game">PLAY NOW</Link>
						</Button>
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default JumbotronComponent;
