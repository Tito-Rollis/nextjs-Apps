import API_ENDPOINT from "../../heroku/api-endpoint";
import api from "axios";

// REGISTER
export const register = (username, email, password) => (dispatch) => {
	return api
		.post(API_ENDPOINT.REGISTER, {
			username,
			email,
			password,
		})
		.then((users) => {
			dispatch({
				type: "REGISTER",
				payload: users.status,
			});
		})
		.catch((err) => {
			if (err.response.status === 422) {
				dispatch({
					type: "REGISTER",
					payload: err.response.status,
				});
			}
		});
};

// LOGIN
export const login = (email, password) => (dispatch) => {
	return api
		.post(API_ENDPOINT.LOGIN, {email, password})
		.then((users) => {
			dispatch({
				type: "LOGIN",
				payload: users,
			});
		})
		.catch((err) => {
			if (err.response.status === 401) {
				dispatch({
					type: "LOGIN",
					payload: err.response.status,
				});
			}
		});
};

// CLEANUP
export const cleanUp = () => (dispatch) => {
	dispatch({
		type: "CLEANUP",
		payload: null,
	});
};

// LOGOUT
export const logout = () => (dispatch) => {
	dispatch({
		type: "LOGOUT",
		payload: null,
	});
};
