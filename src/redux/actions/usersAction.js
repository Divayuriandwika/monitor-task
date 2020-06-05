import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;


export const getName = (id) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/users/employee/${id}`)
			.then((response) => {
				dispatch(getNameSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getNameSuccess = (data) => {
	return {
		type: 'GET_NAME',
		payload: {
			data
		}
	};
};