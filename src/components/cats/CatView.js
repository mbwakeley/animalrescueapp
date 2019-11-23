import React from "react";
import { connect } from "react-redux";
import NewCatForm from "./NewCatForm";
import CatViewProfile from "./CatViewProfile";

const CatView = props => {
  console.log("catview", props.animal);
  if (props.animal.id) {
    return <CatViewProfile animal={props.animal} />;
  } else {
    return <NewCatForm />;
  }
};

export default connect()(CatView);
