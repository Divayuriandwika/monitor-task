import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// POST new user to API
export const addUser = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users`, values)
			.then((response) => {
				// dispatch(addUserSuccess(response.data));
				// dispatch(createStorage(response.data.data._id));
				console.log(response);
				
			})
			.catch((error) => {
				alert(error.response.data);
				console.log(error);
				throw error;
			});
	};
};

export const addUserSuccess = (data) => {
	return {
		type: 'POST_USER',
		payload: { data }
	};
};