import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// POST new task to API
export const addTask = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/task`, values)
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


// export const getTask = (id) => {
// 	return (dispatch) => {
// 		return axios
// 			.get(`${apiUrl}/task/${id}`)
// 			.then((response) => {
// 				dispatch(getTaskSuccess(response.data));
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 				throw error;
// 			});
// 	};
// };
export const getTaskSuccess = (data) => {
	return {
		type: 'POST_TASK',
		payload: {
			data
		}
	};
};