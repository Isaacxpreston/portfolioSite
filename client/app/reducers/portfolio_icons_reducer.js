export function portfolioIconsReducer (state= {
  alike_me: "alike-me-folder",
  songspace: "songspace-folder",
  content: "none"
}, action) {
	if(action.type === 'ALIKE_ME_CLICKED') {
    return {
      alike_me: "alike-me-folder alike-me-folder-selected",
      songspace: "songspace-folder",
      content: "Alike Me"
    }
	}
  if(action.type === 'SONGSPACE_CLICKED') {
    return {
      alike_me: "alike-me-folder",
      songspace: "songspace-folder songspace-folder-selected",
      content: "Songspace"
    }
	}
  // if(action.type === 'CLICKED_AWAY') {
  //   return {
  //     alike_me: "alike-me-folder",
  //     songspace: "songspace-folder"
  //   }
	// }
	return state;
}