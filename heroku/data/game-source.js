import API_ENDPOINT from "../api-endpoint";

class GameSource {
	static async usersList() {
		const response = await fetch(API_ENDPOINT.GET_ALL_USERS);
		const responseJson = await response.json();
		// console.log(responseJson);
		return responseJson.data;
	}
}

export default GameSource;
