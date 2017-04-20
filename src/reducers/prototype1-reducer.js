const initialState = {
  drawerIsOpen: false
}

export default function(state=initialState, action){

  switch(action.type){

    case 'TOGGLE_DRAWER':
      return { ...state, drawerIsOpen: !state.drawerIsOpen}

    case 'CLOSE_DRAWER':
      return { ...state, drawerIsOpen: false}

    default:
      return { ...state}
  }
}
