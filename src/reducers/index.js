import { combineReducers } from 'redux';
import { SET_RECIPE, FAVORITE_RECIPE, UN_FAVORITE_RECIPE } from '../actions'

function recipes(state = [], action) {
  switch(action.type){
    case SET_RECIPE:
      return action.items
    default:
      return state
  }
}

function favoriteRecipes(state = [], action) {
  switch(action.type) {
    case FAVORITE_RECIPE:
      state = [...state, action.recipe]
      return state;
    case UN_FAVORITE_RECIPE:
      let unFavState = [...state];
      unFavState.splice(unFavState.indexOf(action.recipe), 1)
      return unFavState;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  recipes,
  favoriteRecipes
})

export default rootReducer;
