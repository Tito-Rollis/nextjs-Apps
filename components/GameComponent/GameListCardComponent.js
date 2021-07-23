import React from "react";
import classes from "../../styles/GameComponent.module.css";
import {Card, Button} from "react-bootstrap";
import Link from "next/link";

const GameListCard = (props) => {

	return (
		<div className={classes.GameListCard}>
			<Card className="align-item-center mt-5" style={{width: "26rem"}} bg="dark">
				<Card.Img className="p-4" variant="top" src={props.img} />
				<Card.Body>
					<Card.Title className="text-white">{props.title}</Card.Title>
					<Card.Text className="text-white">{props.detail}</Card.Text>

					<Link href="/games/detail-game">
						<Button className="px-4 py-2" variant="danger">
							Detail Game
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default GameListCard;
