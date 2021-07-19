const initialState = {
	profile: "",
};

export default function (state = initialState, action) {
	switch (action.type) {
		case "GET PROFILE":
			return {
				...state,
				profile: action.payload,
			};
		case "UPDATE PROFILE":
			return {
				...state,
				profile: action.payload,
			};

		default:
			return state;
	}
}
