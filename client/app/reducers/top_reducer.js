export function topReducer (state= {
  portfolio: "",
  about_me: "",
}, action) {
	if(action.type === 'PORTFOLIO_TOP') {
    return {
      portfolio: " top",
      about_me: ""
    }
	}
  if(action.type === 'ABOUT_ME_TOP') {
    return {
      portfolio: "",
      about_me: " top"
    }
	}
	return state;
}