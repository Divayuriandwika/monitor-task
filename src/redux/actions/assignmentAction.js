import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;


export const getTask = (id) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/task/${id}`)
			.then((response) => {
				dispatch(getTaskSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getTaskSuccess = (data) => {
	return {
		type: 'GET_TASK',
		payload: {
			data
		}
	};
};