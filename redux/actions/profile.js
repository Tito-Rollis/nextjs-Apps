import API_ENDPOINT from "../../heroku/api-endpoint";
import api from "axios";

// GET PROFILE
export const getProfile = (token) => (dispatch) => {
	return api
		.get(API_ENDPOINT.GET_PROFILE, {
			headers: {
				Authorization: token,
			},
		})
		.then((res) => {
			dispatch({
				type: "GET PROFILE",
				payload: res?.data?.data,
			});
		})
		.catch((err) => {
			if (err.response.status === 404) {
				console.log(err.response.status);
				dispatch({
					type: "GET PROFILE",
					payload: err.response.status,
				});
			}
		});
};

// UPDATE PROFILE
export const updateProfile = (token, username, city_id, email, biodata, social_media_url) => (dispatch) => {
	return api
		.put(
			API_ENDPOINT.UPDATE_PROFILE,
			{
				username,
				city_id,
				email,
				biodata,
				social_media_url,
			},
			{
				headers: {
					Authorization: token,
				},
			}
		)
		.then((res) => {
			dispatch({
				type: "UPDATE PROFILE",
				payload: res,
			});
		})
		.catch((err) => {
			if (err.response.status === 404) {
				console.log(err?.response?.status);
				dispatch({
					type: "UPDATE PROFILE",
					payload: err.response.status,
				});
			}
		});
};
