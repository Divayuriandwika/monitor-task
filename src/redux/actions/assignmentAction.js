import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

// POST new task to API
export const addTask = (values) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/task`, values)
			.then((response) => {
				dispatch(postTaskSuccess(response.data.data));
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

export const postTaskSuccess = (data) => {
	return {
		type: 'POST_TASK',
		payload: {
			data
		}
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
		type: 'GET_TASK',
		payload: {
			data
		}
	};
};


export const getAllTask = () => {
	return (dispatch) => {
		return axios
		.get(`${apiUrl}/task`)
		.then((response) => {
				dispatch(getTaskSuccess(response.data.data))
		})
		.catch((error) => {
			console.log(error);
			throw error;
			
		})
	}
}


export const getTaskID = (id) => {
	return (dispatch) => {
		return axios
			.get(`${apiUrl}/task/manager/${id}`)
			.then((response) => {
				dispatch(getTaskIDSuccess(response.data));
			})
			.catch((error) => {
				console.log(error);
				throw error;
			});
	};
};
export const getTaskIDSuccess = (data) => {
	return {
		type: 'GET_TASK',
		payload: {
			data
		}
	};
};


export const deleteTask = (id) => {
	return (dispatch) => {
		console.log("woi")
		return axios.delete(`${apiUrl}/task/${id}`)
		.then((response) => {})
		.catch((error) => {
			console.log(error);
			throw error;
			
		})
	}
}



export const editTask = (id) => {
	console.log(id)
	return (dispatch) => {
		console.log(id)
		return axios
		.put(`${apiUrl}/task/${id.id}`,id)
		.then((response) => {
			console.log(response)
			// dispatch(editTaskSuccess(response.data));
			// dispatch(getTaskIDSuccess(response.data));
			dispatch(getAllTask());
		})
		.catch((error) => {
			console.log(error);
			throw error;
		});
	}
}
	


export const editTaskSuccess = (data) => {
	return {
		type: 'EDIT_TASK',
		payload: {
			data
		}
	};
};
