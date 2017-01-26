export function menuReducer (state = {
  menu_left: "menu-left",
  popup: "popup hidden",
  icons: "hidden"
}, action) {
	if(action.type === 'MENU_TOGGLE') {
    if(state.menu_left === "menu-left") {
      return {
        menu_left: "menu-left menu-left-selected",
        popup: "popup",
        icons: ""
      }
    } else {
      return {
        menu_left: "menu-left",
        popup: "popup hidden",
        icons: "hidden"
      }
    }
	}
  if(action.type === 'MENU_CLICKED_AWAY') { //todo - fire this EVERYWHERE.
    return {
      menu_left: "menu-left",
      popup: "popup hidden",
      icons: "hidden"
    }
	}
	return state;
}