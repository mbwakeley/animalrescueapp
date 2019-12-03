import React from "react";
import CatsList from "./CatsList";
import CatView from "./CatView";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

const Cats = props => {
  // let catId = Number(props.match.params.id) || 0;
  // const oneCat = props.animals
  //   .filter(animal => animal.id === catId)
  //   .map(cat => {
  //     return <CatView key={cat.id} cat={cat} />;
  //   });

  return (
    <div>
      <div class="container-fluid">
        <h2 class="text-center">Cats</h2>
        <hr />
        <div class="container-flex">
          <div class="row">
            <div class="col-4">
              <CatsList />
            </div>
            <vr />
            <div class="col-7">
              <Route path="/cats/:id" component={CatView} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    animals: state.animals.all.filter(animal => animal.species == "Cat")
  };
};

export default connect(mapStateToProps)(Cats);
