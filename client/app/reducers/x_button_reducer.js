export function xButtonReducer (state= {
  portfolio: "x-button-clicked x-hidden",
  about_me: "x-button-clicked x-hidden",
}, action) {
	if(action.type === 'PORTFOLIO_X_CLICKED') {
    return {
      ...state,
      portfolio: "x-button-clicked"
    }
	}
  if(action.type === 'ABOUT_ME_X_CLICKED') {
    return {
      ...state,
      about_me: "x-button-clicked"
    }
	}
  if(action.type === 'PORTFOLIO_X_RELEASED') {
    return {
      ...state,
      portfolio: "x-button-clicked x-hidden"
    }
	}
  if(action.type === 'ABOUT_ME_X_RELEASED') {
    return {
      ...state,
      about_me: "x-button-clicked x-hidden"
    }
	}
	return state;
}