import axios from 'axios';
// import {useHistory} from 'react-router-dom'

const apiUrl = process.env.REACT_APP_API_URL;
// const history = useHistory()

export const loginUser = (values, history) => {
	return (dispatch) => {
		return axios
			.post(`${apiUrl}/users/login`, values)
			.then((response) => {
				localStorage.setItem('id', response.data.id);
				localStorage.setItem('role', response.data.role);
				localStorage.setItem('message', response.data.message);
				dispatch(newLogin(response.data.role, history))
				// history.push('/manager')
				// if(response.data !== 'undefined'){
				// 	if (response.data.role === 'manager'){
				// 		history.push('/manager')
				// 	}

				// }
				// localStorage.setItem('refToken', response.data.refreshToken);
				// localStorage.setItem('isLoggedIn', true);
                // dispatch(currentUser(response.data.token));
                // console.log(response.data)
                
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
