import React from "react";
import { connect } from "react-redux";
import NewCatForm from "./NewCatForm";
import CatViewProfile from "./CatViewProfile";
import { withRouter } from "react-router-dom";

const CatView = props => {
  console.log("catview", props);
  let catId = Number(props.match.params.id) || 0;
  console.log("catID", catId);

  const oneCat = props.animals
    .filter(animal => animal.id === catId)
    .map(cat => {
      return <CatViewProfile key={cat.id} cat={cat} />;
    });

  return <>{catId ? oneCat : <NewCatForm />}</>;
};

const mapStateToProps = (state, props) => {
  return {
    animals: state.animals.all.filter(animal => animal.species == "Cat")
  };
};
export default connect(mapStateToProps)(withRouter(CatView));
