import React from "react";
import CatsList from "./CatsList";
import CatView from "./CatView";

const Cats = props => {
  let animal = Number(props.match.params.id) || 0;

  return (
    <div>
      <div class="container">
        <h2 class="text-center">Cats</h2>

        <hr />
        <div class="container">
          <div class="row">
            <div class="col-5">
              <CatsList animal={animal} />
            </div>
            <vr />
            <div class="col">
              <CatView animal={animal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cats;
