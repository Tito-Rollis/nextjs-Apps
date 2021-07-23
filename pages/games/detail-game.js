import React, {useEffect} from "react";
import {Button, Col, Row, Table, Image, Container} from "react-bootstrap";
import style from "../../styles/gameDetail.module.css";
// import imgrps from "/assets/images/rps.png";
import Link from "next/link";
// REDUX
import {createRoom, leaderboard} from "../../redux/actions/game";
import {useSelector, useDispatch} from "react-redux";

function GameDetail() {
	// GET STORE FROM REDUX
	const token = useSelector((state) => state.auth?.token);
	const data = useSelector((state) => state.game.data.slice(0, 4));
	const dispatch = useDispatch();

	// DIDMOUNT
	// GET LEADERBOARD DATA API
	useEffect(() => {
		dispatch(leaderboard(1));
	}, []);

	// HANDLE FOR CREATE ROOM
	const create_room = (e) => {
		dispatch(createRoom(1, token));
	};

	return (
		<Container fluid>
			<Row className="justify-content-center my-3">
				{token !== null ? (
					<Link href="/games/GameRockPaperScissors">
						<Button className={style.button} onClick={create_room} variant="danger" size="lg">
							Create Room
						</Button>
					</Link>
				) : (
					<Link href="/login">
						<Button className={style.button} variant="danger" size="lg">
							Create Room
						</Button>
					</Link>
				)}
			</Row>
			<Row className="mt-5">
				<Col lg={4}>
					<Row>
						<Col className="d-flex justify-content-md-start justify-content-center">
							<Image className="mx-3" src="/assets/images/rps.png" style={{width: 150, height: "auto"}} />
						</Col>
					</Row>
					<Row>
						<Col>
							<div
								className="mx-4 text-left my-4"
								style={{
									fontFamily: "Montserrat",
								}}
							>
								<h1 className="font-weight-bold">Rock, Paper, Scissors</h1>
								<p className="font-weight-medium" style={{fontSize: "15px"}}>
									Sebuah game tradisional antara 2 orang. Ada 'rock' yang berarti batu, 'paper' yang berarti kertas, dan 'scissors' yang berarti gunting. Cara menentukan pemenangnya
									adalah 'rock' menang melawan 'scissors', 'scissors' menang melawan 'paper', dan 'paper' menang melawan 'rock'.
								</p>
							</div>
						</Col>
					</Row>
				</Col>

				<Col lg={8} style={{fontFamily: "Montserrat"}}>
					<h1 className="text-center">Leader Board</h1>
					<Table className="mt-4 text-center" striped bordered hover>
						<thead>
							<tr>
								<th>No</th>
								<th>Username</th>
								<th>City</th>
								<th>Score</th>
							</tr>
						</thead>

						{data.length === 4 &&
							data.map((item, index) => {
								return (
									<tbody key={index}>
										<td>{index + 1}</td>
										<td>{item.user?.username}</td>
										<td>{item.user?.city?.name}</td>
										<td>{item.score}</td>
									</tbody>
								);
							})}
					</Table>
				</Col>
			</Row>
		</Container>
	);
}

export default GameDetail;
