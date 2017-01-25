export function portfolioIconsReducer (state= {
  alike_me: "alike-me-folder",
  songspace: "songspace-folder"
}, action) {
	if(action.type === 'ALIKE_ME_CLICKED') {
    return {
      alike_me: "alike-me-folder alike-me-folder-selected",
      songspace: "songspace-folder"
    }
	}
  if(action.type === 'SONGSPACE_CLICKED') {
    return {
      alike_me: "alike-me-folder",
      songspace: "songspace-folder songspace-folder-selected"
    }
	}
	return state;
}