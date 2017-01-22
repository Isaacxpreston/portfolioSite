export function user (state=["yeah user"], action) {
	if(action.type === 'SET_USER') {
		console.log('set user', action)
		return state
	}
	return state;
}

