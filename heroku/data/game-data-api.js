import API_ENDPOINT from "../api-endpoint";

class GameData {
	static async gameData() {
		const response = await fetch(API_ENDPOINT.GET_ALL_GAMES);
		const responseJson = await response.json();
		// console.log(responseJson);
		return responseJson.data;
	}
}

export default GameData;
