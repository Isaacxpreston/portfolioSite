export function portfolioIconsReducer (state= {
  alike_me: ""
}, action) {
	if(action.type === 'ALIKE_ME_CLICKED') {
    return {
    }
	}
	return state;
}