import { combineReducers } from 'redux';
import { SET_RECIPE, FAVORITE_RECIPE, UN_FAVORITE_RECIPE } from '../actions';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
      let newState = [...state, action.recipe]
      cookies.set('favorites', state, { path: '/'})
      return newState;
    case UN_FAVORITE_RECIPE:
      let unFavState = [...state];
      unFavState.splice(unFavState.indexOf(action.recipe), 1)
      cookies.set('favorites', unFavState, { path: '/'})
      return unFavState;
    default:
      if (cookies.get('favorites')){
        return cookies.get('favorites');
      } else {
        return []
      }
  }
}


const rootReducer = combineReducers({
  recipes,
  favoriteRecipes
})

export default rootReducer;
