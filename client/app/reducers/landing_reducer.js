export function landingReducer (state= "landing", action) {
  if (action.type === "HIDE_LANDING") {
    return "landing hidden"
  }
	return state;
}