export const SET_RECIPE = 'SET_RECIPE';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';
export const UN_FAVORITE_RECIPE = 'UN_FAVORITE_RECIPE';


export function setRecipe (items) {
  const action = {
    type: SET_RECIPE,
    items
  }
  return action
}

export function favoriteRecipe(recipe) {
  return {
    type: FAVORITE_RECIPE,
    recipe
  }
}

export function unFavoriteRecipe(recipe, index) {
  return {
    type: UN_FAVORITE_RECIPE,
    recipe, index
  }
}
