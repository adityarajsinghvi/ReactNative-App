import { combineReducers } from 'redux'
import { stateTree } from  '../state'


function reducer(state = stateTree, action) {
  switch (action.type) {
    case 'TOGGLE_APP':
      return {
        ...state,
        followers: action.data.dataclone
      }
    default:
      return state
    }
}



export default reducer