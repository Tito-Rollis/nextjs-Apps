export const initialState = {
	status: "",
	token: null,
	users: null,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "REGISTER":
			return {
				...state,
				users: action.payload,
			};
		case "LOGIN":
			return {
				...state,
				token: action.payload.data?.accessToken ?? null,
				users: action.payload,
			};
		case "CLEANUP":
			return {
				...state,
				users: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				users: action.payload,
				token: action.payload,
			};

		default:
			return state;
	}
}
