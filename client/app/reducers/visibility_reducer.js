export function visibility (state={
  class: "visible",
  navbar: true
}, action) {
	if(action.type === 'SET_VISIBILITY_HIDDEN') {
    return {...state, class: 'hidden'}
	}
  if(action.type === 'SET_VISIBILITY') {
    return {...state, class: "visible"}
	}
  if(action.type === 'SHOW_NAVBAR') {
    return {...state, navbar: true}
	}
  if(action.type === 'HIDE_NAVBAR') {
    return {...state, navbar: false}
	}
	return state;
}
