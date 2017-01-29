export function windowReducer (state= {
  portfolio: "portfolio handle hidden",
  about_me: "about-me-notepad handle hidden",
}, action) {
	if(action.type === 'PORTFOLIO_ICON_CLICKED') {
    return {
      ...state,
      portfolio: "portfolio handle"
    }
	}
  if(action.type === 'ABOUT_ME_ICON_CLICKED') {
    return {
      ...state,
      about_me: "about-me-notepad handle"
    }
	}
  if(action.type === 'PORTFOLIO_X_RELEASED') {
    return {
      ...state,
      portfolio: "portfolio handle hidden"
    }
	}
  if(action.type === 'ABOUT_ME_X_RELEASED') {
    return {
      ...state,
      about_me: "about-me-notepad handle hidden"
    }
	}
	return state;
}