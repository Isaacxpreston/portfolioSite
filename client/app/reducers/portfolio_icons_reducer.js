export function portfolioIconsReducer (state= {
  alike_me: "alike-me-folder",
  songspace: "songspace-folder",
  sixteen_personality: "sixteen-personality-folder",
  yt3d: "yt3d-folder",
  content: "none"
}, action) {
	if(action.type === 'ALIKE_ME_CLICKED') {
    return {
      alike_me: "alike-me-folder alike-me-folder-selected",
      songspace: "songspace-folder",
      sixteen_personality: "sixteen-personality-folder",
      yt3d: "yt3d-folder",
      content: "Alike Me"
    }
	}
  if(action.type === 'SONGSPACE_CLICKED') {
    return {
      alike_me: "alike-me-folder",
      songspace: "songspace-folder songspace-folder-selected",
      sixteen_personality: "sixteen-personality-folder",
      yt3d: "yt3d-folder",
      content: "Songspace"
    }
	}
  if(action.type === 'SIXTEEN_PERSONALITY_CLICKED') {
    return {
      alike_me: "alike-me-folder",
      songspace: "songspace-folder",
      sixteen_personality: "sixteen-personality-folder sixteen-personality-folder-selected",
      yt3d: "yt3d-folder",
      content: "Personality Data"
    }
	}
  if(action.type === 'YT3D_CLICKED') {
    return {
      alike_me: "alike-me-folder",
      songspace: "songspace-folder",
      sixteen_personality: "sixteen-personality-folder",
      yt3d: "yt3d-folder yt3d-folder-selected",
      content: "YT3D Converter" //has to match project name
    }
	}

	return state;
}