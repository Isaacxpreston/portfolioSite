//also add actions for z-index, yo! -ie. append a .top class that just bumps up the z index
//make seperate reducer and return portfolio and about me z indexes and make a dispatch for it

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
	return state;
}