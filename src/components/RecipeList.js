import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RecipeItem from './RecipeItem';


class RecipeList extends Component {
  render() {

    return (
      <div>
        <h4 className="link"><Link to='/favorites'>Favorite</Link></h4>
        {
          this.props.recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <RecipeItem recipe={recipe}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null) (RecipeList);
