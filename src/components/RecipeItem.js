import React, { Component } from 'react';
import { connect } from 'react-redux'
import { favoriteRecipe, unFavoriteRecipe } from '../actions';


class RecipeItem extends Component {

  // Checks if the recipe exists in the favoriteRecipeList
  isFav(recipe, favoriteRecipes){
    let result = false;
    favoriteRecipes.forEach((favRecipe, index) => {
      if (favRecipe.title === recipe.title){
        result = true;
      }
    })
    return result;
  }

  render () {
    let {recipe, favoriteRecipes} = this.props;


    return (
      <div className="recipe-item">
        {
          (this.isFav(recipe, favoriteRecipes)) ?
            <div
              className="star"
              onClick={() => this.props.unFavoriteRecipe(recipe)}
            >
              &#9733;
            </div>
          :
            <div
              className="star"
              onClick={() => this.props.favoriteRecipe(recipe)}
            >
              &#9734;
            </div>
        }
        <div className="recipe-text">
          <a href={recipe.href}>
            <h4>{recipe.title}</h4>
          </a>
          <p>{recipe.ingredients}</p>
        </div>
        <img
          src={recipe.thumbnail}
          alt={recipe.title}
          className="recipe-img"
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps, {favoriteRecipe, unFavoriteRecipe}) (RecipeItem);
