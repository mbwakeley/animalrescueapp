import React from "react";
import { connect } from "react-redux";
import NewCatForm from "./NewCatForm";
import CatViewProfile from "./CatViewProfile";
import { withRouter } from "react-router-dom";
import EditCatForm from "./EditCatForm";

const CatView = props => {
  console.log("catview", props);
  let catId = Number(props.match.params.id) || 0;
  console.log("catID", catId);

  const oneCat = props.animals
    .filter(animal => animal.id === catId)
    .map(cat => {
      return <CatViewProfile key={cat.id} cat={cat} />;
    });

  const editOneCat = props.animals
    .filter(animal => animal.id === catId)
    .map(cat => {
      return <EditCatForm key={cat.id} cat={cat} />;
    });

  return (
    <>
      {catId && !window.location.pathname.includes("edit") && oneCat}
      {window.location.pathname.includes("new") && <NewCatForm />}
      {window.location.pathname.includes("edit") && editOneCat}
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    animals: state.animals.all.filter(animal => animal.species == "Cat")
  };
};
export default connect(mapStateToProps)(withRouter(CatView));
