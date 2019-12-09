import React, { Component } from "react";
import RecipeSearch from "./RecipeSearch";
import Recipe from "./Recipe";

export class RecipeList extends Component {
  render() {
    const {
      recipes,
      handleDetails,
      value,
      handleChange,
      handleSubmit,
      error
    } = this.props;
    return (
      <div>
        <RecipeSearch
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div className="container">
          {/* title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">recipe list</h1>
            </div>
          </div>
          {/* end of title */}
        </div>
        <div className="row">
          {error ? (
            <h1 className="text-danger text-center">{error}</h1>
          ) : (
            recipes.map(recipe => {
              return (
                <Recipe
                  key={recipe.recipe_id}
                  recipe={recipe}
                  handleDetails={() => handleDetails(0, recipe.recipe_id)}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default RecipeList;
