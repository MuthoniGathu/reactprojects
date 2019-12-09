import React, { Component } from "react";

class RecipeSearch extends Component {
  render() {
    const { value, handleSubmit, handleChange } = this.props;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 text-center">
              <h1 className="text-slanted text-capitalize">
                search for recipe with{" "}
                <strong className="text-danger">Food2Fork</strong>
              </h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search" className="text-capitalize">
                  type recipes seperated by comma
                </label>
                <div className="input-group">
                  <input
                    type="text"
                    name="search"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                    placeholder="apples,cinnamon,berries"
                  />
                  <div className="input-group-append">
                    <button className="input-group-text bg-primary text-white">
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RecipeSearch;
