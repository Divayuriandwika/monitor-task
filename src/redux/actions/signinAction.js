import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;


export const loginUser = (values, history) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users/login`, values)
			.then((response) => {
				localStorage.setItem('id', response.data.id);
				localStorage.setItem('role', response.data.role);
				localStorage.setItem('message', response.data.message);
				dispatch(newLogin(response.data.role, history))
                
			})
			.catch((error) => {
				// alert(error.response.data);
				throw error;
			});
	};
};

export const newLogin = (data, history) => {
	return () => {
		
		if(data === 'manager') {
			history.push('/manager')
			
		}
		else if(data === 'karyawan') {
			history.push('/dashemp')
		}
		// 	
		console.log(data);
		
	}
}

export const loginSuccess = (data) => {
	return {
		type: 'LOGIN',
		payload: {
			data
		}
	};
};
