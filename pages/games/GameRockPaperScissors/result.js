import React from "react";
import Link from "next/link";
import {Container, Row, Col, Button} from "react-bootstrap";
import style from "../../../styles/GameRockPaperScissors.module.css";
// REDUX
import {useSelector, useDispatch} from "react-redux";
import {resetChoice} from "../../../redux/actions/game";

const RockPaperScissorsResult = () => {
	// USE DISPATCH
	const dispatch = useDispatch();
	const restartChoice = () => {
		dispatch(resetChoice());
	};
	// GET STORE FROM REDUX
	const myChoice = useSelector((state) => state.game.myChoice);
	const house = useSelector((state) => state.game.compChoice);
	const score = useSelector((state) => state.game.score);
	const result = useSelector((state) => state.game.result);
	const isNull = useSelector((state) => state.game.response?.data?.data ?? null);

	return (
		<div className={style.backgroundGame}>
			<Container>
				{isNull == null ? (
					<Container className="d-flex flex-column align-items-center justify-content-center" fluid>
						<h1 className="text-center">Please create room again!</h1>
						<Link href="/games/detail-game">
							<Button className="w-50 mt-5" onClick={restartChoice} variant="danger">
								Create Room
							</Button>
						</Link>
					</Container>
				) : (
					<>
						<Row className="justify-content-start">
							<Col xs={12} className={`px-2 ${style.backrps} me-2 justify-content-start`}>
								<Link href="/games">
									<Button variant="warning">BACK</Button>
								</Link>
							</Col>
							<Col xs={12} className="px-2 py-4 d-flex  justify-content-center">
								<img src="/assets/images/rps.png" fluid />
							</Col>
						</Row>
						<Row>
							<Col className="text-center">
								<h3>Score : {score}</h3>
							</Col>
						</Row>
						<Row className="d-flex flex-wrap justify-content-center">
							<Col className="text-center">
								<div className="py-4">
									My Choice: <br /> <br />
									{myChoice === "r" && <img className={style.click} src="/assets/images/rock.png" height="200" />}
									{myChoice === "p" && <img className={style.click} src="/assets/images/paper.png" height="200" />}
									{myChoice === "s" && <img className={style.click} src="/assets/images/scissors.png" height="200" />}
								</div>
							</Col>
							<Col className="text-center">
								<div className="py-4">
									Result: <br /> <br /> <br />
									{result === "PLAYER WIN" && <h2>You Win</h2>}
									{result === "COM WIN" && <h2>You Lose</h2>}
									{result === "DRAW" && <h2>Draw</h2>}
								</div>
							</Col>
							<Col className="text-center">
								<div className="py-4">
									House Choice: <br /> <br />
									{house === "r" && <img src="/assets/images/rock.png" height="200" />}
									{house === "p" && <img src="/assets/images/paper.png" height="200" />}
									{house === "s" && <img src="/assets/images/scissors.png" height="200" />}
								</div>
							</Col>
						</Row>
						<Row>
							<Col className="text-center">
								<div className={`pt-4 ${style.playAgain}`}>
									<Link href="/games/GameRockPaperScissors">
										<Button onClick={restartChoice} variant="danger">
											PLAY AGAIN
										</Button>
									</Link>
								</div>
							</Col>
						</Row>
					</>
				)}
			</Container>
		</div>
	);
};

export default RockPaperScissorsResult;
