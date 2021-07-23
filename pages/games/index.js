import React, {Component, Fragment} from "react";

// components FE
import GameList from "../../components/GameComponent/GameListComponent";

class gameContainer extends Component {
	componentDidMount() {
		document.querySelector(".navbar").style.backgroundColor = "black";
	}

	render() {
		return (
			<Fragment>
				<GameList />
			</Fragment>
		);
	}
}

export default gameContainer;
