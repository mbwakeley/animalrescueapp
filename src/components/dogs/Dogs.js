import React from "react";
import DogsList from "./DogsList";
import DogView from "./DogView";
import { Route } from "react-router-dom";

const Dogs = props => {
  return (
    <div>
      <div class="container-fluid">
        <h1 class="text-center">Dogs</h1>
        <hr />
        <div class="container-flex">
          <div class="row">
            <div class="col-4">
              <DogsList />
            </div>
            <vr />
            <div class="col-7">
              <Route path="/dogs/:id" component={DogView} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dogs;
