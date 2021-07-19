import API_ENDPOINT from "../../heroku/api-endpoint";
import api from "axios";

// CREATE ROOM
export const createRoom = (id, token) => (dispatch) => {
	return api
		.post(
			API_ENDPOINT.CREATE_ROOM(id),
			{},
			{
				headers: {
					Authorization: token,
				},
			}
		)
		.then((res) => {
			dispatch({
				type: "CREATE ROOM",
				payload: res,
			});
		})
		.catch((err) => {
			if (err.response.status === 401) {
				console.log(err.response.status);
				dispatch({
					type: "CREATE ROOM",
					payload: err.response,
				});
			}
		});
};

// PLAY GAME
export const playGame = (id, choice, room, token) => (dispatch) => {
	return api
		.post(
			API_ENDPOINT.PLAY_GAME(id),
			{
				player_choice: choice,
				room_id: room,
			},
			{
				headers: {
					Authorization: token,
				},
			}
		)
		.then((res) => {
			dispatch({
				type: "PLAY RPS",
				payload: res,
				compChoice: res?.data?.data?.computer_choice,
				result: res?.data?.data?.result,
				score: res?.data?.data?.score,
				choice,
			});
		})
		.catch((err) => {
			if (err.response?.status === 401) {
				console.log(err.response?.status);
				dispatch({
					type: "PLAY RPS",
					payload: "err",
				});
			}
		});
};

// LEADERBOARD
export const leaderboard = (id) => (dispatch) => {
	return api
		.get(API_ENDPOINT.LEADERBOARD(id))
		.then((res) => {
			dispatch({
				type: "LEADERBOARD",
				payload: res?.data,
			});
		})
		.catch((err) => {
			if (err.response?.status === 401) {
				console.log(err.response?.status);
				dispatch({
					type: "LEADERBOARD",
					payload: err.response?.status,
				});
			}
		});
};

// RESET CHOICE
export const resetChoice = () => (dispatch) => {
	dispatch({
		type: "RESET CHOICE",
		payload: "",
	});
};
