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

// FORGOT
export const forgot = (email) => (dispatch) => {
	return api
		.post(API_ENDPOINT.FORGOT, {email})
		.then((user) => {
			dispatch({
				type: "FORGOT",
				payload: user,
			});
		})
		.catch((err) => {
			console.log(err);

			if (err.response.status === 422) {
				dispatch({
					type: "FORGOT",
					payload: err.response.status,
				});
			}
		});
};

// RESET
export const reset = (token, password) => (dispatch) => {
	return api
		.post(API_ENDPOINT.RESET(token), {password})
		.then((user) => {
			dispatch({
				type: "RESET",
				payload: user,
			});
		})
		.catch((err) => {
			console.log(err);

			if (err.response.status === 401) {
				dispatch({
					type: "RESET",
					payload: err.response.status,
				});
			}
		});
};
