import CONFIG from "./config";

const API_ENDPOINT = {
	REGISTER: `${CONFIG.BASE_URL}/register`,
	LOGIN: `${CONFIG.BASE_URL}/login`,
	PLAY_GAME: (id) => `${CONFIG.BASE_URL}/game/${id}/play`,
	CREATE_ROOM: (id) => `${CONFIG.BASE_URL}/game/${id}/room`,
	GET_PROFILE: `${CONFIG.BASE_URL}/profile`,
	LEADERBOARD: (id) => `${CONFIG.BASE_URL}/game/${id}/score`,
	UPDATE_PROFILE: `${CONFIG.BASE_URL}/profile`,
};

export default API_ENDPOINT;
