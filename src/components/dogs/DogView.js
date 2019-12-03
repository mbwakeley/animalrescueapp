import React from "react";
import { connect } from "react-redux";
import NewDogForm from "./NewDogForm";
import DogViewProfile from "./DogViewProfile";
import { withRouter } from "react-router-dom";
import EditDogForm from "./EditDogForm";

const DogView = props => {
  console.log("Dogview", props);
  let dogId = Number(props.match.params.id) || 0;
  console.log("dogid", dogId);

  const oneDog = props.animals
    .filter(animal => animal.id === dogId)
    .map(dog => {
      return <DogViewProfile key={dog.id} dog={dog} />;
    });

  return (
    <>
      {dogId && !window.location.pathname.includes("edit") && oneDog}
      {window.location.pathname.includes("new") && <NewDogForm />}
      {window.location.pathname.includes("edit") && <EditDogForm />}
    </>
  );
};

const mapStateToProps = state => {
  return {
    animals: state.animals.all.filter(animal => animal.species === "Dog")
  };
};
export default connect(mapStateToProps)(withRouter(DogView));
