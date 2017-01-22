export function dummy (state=null, action) {
	if(action.type === 'SET_USER') {
		console.log('set user', action)
		return action.user
	}
	return state;
}

