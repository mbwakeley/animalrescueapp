import React from "react";
import { ListGroup } from "reactstrap";
import CatsListItem from "./CatsListItem";
import { connect } from "react-redux";

class CatsList extends React.Component {
  // state = {
  //     filterPhrase: ""
  //   };
  render() {
    const cats = this.props.animals;
    const listOfCats = cats.map(animal => (
      <CatsListItem key={animal.id} animal={animal} />
    ));
    console.log("list of cats", cats);
    return (
      <div style={{ display: "flex" }}>
        <div class="container">
          <div class="col">
            <hr />
            <ListGroup>{listOfCats}</ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals.all.filter(animal => animal.species == "Cat")
  };
};
export default connect(mapStateToProps)(CatsList);
