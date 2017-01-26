//TODO
//defaults: "portfolio handle", "about-me-notepad handle"
//hidden: can probably just get away with "hidden", otherwise do 
//"portfolio handle hidden", "about-me-notepad handle hidden"
//actions for about me and portfolio double click

//also add actions for z-index, yo! -ie. append a .top class that just bumps up the z index

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