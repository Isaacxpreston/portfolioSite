import axios from 'axios'

export function setUser (user) {
	return {
		type: 'SET_USER',
		user
	}
}

export function loginApiRequest (userData) {
	return function (dispatch) {
		// return axios.post('/auth/login', userData)
		// .then((resp) => {
		// 	dispatch(setUser("PLACEHOLDER"));
		// })
		// .catch((err) => {
		// 	console.log(err);
		// })
	}
}
