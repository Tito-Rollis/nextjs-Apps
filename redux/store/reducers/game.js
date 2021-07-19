const initialState = {
	response: "",
	data: "",
	myChoice: "is you",
	compChoice: "not you",
	score: 0,
	result: null,
	room_id: "",
	code: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "PLAY RPS":
			return {
				...state,
				response: action.payload,
				myChoice: action.choice,
				compChoice: action.compChoice,
				result: action.result,
				score: action.score,
			};
		case "CREATE ROOM":
			return {
				...state,
				response: action.payload,
			};
		case "LEADERBOARD":
			return {
				...state,
				data: action.payload.data,
				code: action.payload.meta.code,
			};
		case "RESET CHOICE":
			return {
				...state,
				myChoice: action.payload,
				compChoice: action.payload,
				result: null,
				score: 0,
			};

		default:
			return state;
	}
}
