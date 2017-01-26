export function menuReducer (state = {
  menu_left: "menu-left",
  popup: "",
}, action) {
	if(action.type === 'MENU_TOGGLE') {
    if(state.menu_left === "menu-left") {
      return {
        menu_left: "menu-left menu-left-selected",
        popup: "popup"
      }
    } else {
      return {
        menu_left: "menu-left",
        popup: "popup hidden"
      }
    }
	}
  if(action.type === 'MENU_CLICKED_AWAY') { //todo - fire this EVERYWHERE.
    return {
      menu_left: "menu-left",
      popup: "popup hidden"
    }
	}
	return state;
}