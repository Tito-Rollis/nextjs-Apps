import React, {useEffect} from "react";
import Link from "next/link";
import {useRouter} from "next/router";
import {Container, Row, Col, Button} from "react-bootstrap";
import style from "../../../styles/GameRockPaperScissors.module.css";
// REDUX
import {playGame} from "../../../redux/actions/game";
import {useSelector, useDispatch} from "react-redux";

const RockPaperScissors = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const room_id = useSelector((state) => state.game.response.data?.data?.room_id);
	const token = useSelector((state) => state.auth?.token);

	// REDIRECT IF NOT AUTHORIZED
	useEffect(() => {
		if (token === null) {
			router.push("/login");
		}
	}, []);

	const setChoice = (e) => {
		dispatch(playGame(1, e.target.id, room_id, token));
	};

	return (
		<div className={style.backgroundGame}>
			<Container>
				<Row className="justify-content-start">
					<Col xs={12} className={`px-2 ${style.backrps} me-2 justify-content-start`}>
						<Link href="/games">
							<Button variant="primary">BACK</Button>
						</Link>
					</Col>
					<Col xs={12} className="px-2 py-4 d-flex  justify-content-center">
						<img src="/assets/images/rps.png" fluid />
					</Col>
				</Row>
				<Row>
					<Col xs={12} className={`px-2 py-4 ${style.judulrps} text-center`}>
						<h2>MAKE YOUR CHOICE</h2>
					</Col>
					<Col className="text-center" xs={12}>
						<h2>My Choice:</h2> <br />
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center">
						<Link href="/games/GameRockPaperScissors/result">
							<img src="/assets/images/rock.png" height="150" id="r" onClick={setChoice} className="icon icon--rock m-3" alt="imgrock" />
						</Link>
					</Col>
				</Row>

				<Row>
					<Col className="d-flex justify-content-center">
						<Link href="/games/GameRockPaperScissors/result">
							<img src="/assets/images/paper.png" height="150" id="p" onClick={setChoice} className="m-3 icon icon--paper" alt="imgpaper" />
						</Link>
					</Col>
				</Row>

				<Row>
					<Col className="d-flex justify-content-center">
						<Link href="/games/GameRockPaperScissors/result">
							<img src="/assets/images/scissors.png" height="150" id="s" onClick={setChoice} className="m-3 icon icon--scissors" alt="imgscissors" />
						</Link>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default RockPaperScissors;
