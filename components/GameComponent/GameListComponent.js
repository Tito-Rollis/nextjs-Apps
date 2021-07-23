import React, {Component} from "react";
import {Container, Row, Col} from "react-bootstrap";
import GameListCard from "./GameListCardComponent";
import classes from "../../styles/GameComponent.module.css";

export default class GameList extends Component {
	state = {
		img: ["/assets/images/rockpaperstrategy.png", "/assets/images/under-construction.png"],
		title: ["Rock-Paper-Scissors", "Under Development"],
		detail: [
			"The familiar game of Rock, Paper, Scissors is played like this: at the same time, two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.",
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id libero vestibulum nunc varius sagittis vitae vel tortor. Praesent blandit nec ante eget luctus. Mauris vestibulum iaculis magna et pretium. Etiam semper sapien sit amet semper finibus.",
		],
		link: ["/game/rock-paper-scissors", "/"],
	};

	render() {
		return (
			<div className={classes.lists}>
				<Container className="py-5">
					<h1 className="font-weight-bold text-white text-center">Check out these EPIC Games!</h1>
					<Row className="">
						<Col className="d-flex justify-content-center">
							<GameListCard className="card" img={this.state.img[0]} title={this.state.title[0]} detail={this.state.detail[0]} link={this.state.link[0]} />
						</Col>
						<Col className="d-flex justify-content-center">
							<GameListCard className="card" img={this.state.img[1]} title={this.state.title[1]} detail={this.state.detail[1]} link={this.state.link[1]} />
						</Col>
					</Row>

					<Row>
						<Col className="d-flex justify-content-center">
							<GameListCard className="card" img={this.state.img[1]} title={this.state.title[1]} detail={this.state.detail[1]} link={this.state.link[1]} />
						</Col>
						<Col className="d-flex justify-content-center">
							<GameListCard className="card" img={this.state.img[1]} title={this.state.title[1]} detail={this.state.detail[1]} link={this.state.link[1]} />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
