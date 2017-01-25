export function iconsReducer (state= {
  my_portfolio: "my-portfolio handle",
  about_me: "about-me handle"
}, action) {
	if(action.type === 'MY_PORTFOLIO_CLICKED') {
    return {
      my_portfolio: "my-portfolio my-portfolio-selected handle",
      about_me: "about-me handle"
    }
	}
  if(action.type === 'ABOUT_ME_CLICKED') {
    return {
      my_portfolio: "my-portfolio handle",
      about_me: "about-me about-me-selected handle"
    }
	}
  if(action.type === 'CLICKED_AWAY') {
    return {
      my_portfolio: "my-portfolio handle",
      about_me: "about-me handle"
    }
	}
	return state;
}