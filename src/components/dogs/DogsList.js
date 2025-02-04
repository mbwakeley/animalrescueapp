import React from "react";
import { ListGroup } from "reactstrap";
import DogsListItem from "./DogsListItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class DogsList extends React.Component {
  state = {
    filterPhrase: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const dogs = this.props.animals;
    const listOfDogs = dogs
      .filter(dog => dog.name.toLowerCase().includes(this.state.filterPhrase))
      .map(animal => <DogsListItem key={animal.id} animal={animal} />);

    console.log("list of dogs", dogs);

    return (
      <div style={{ display: "flex" }}>
        <div class="container">
          <div class="col">
            <Link to={`/dogs/newdog/`}>
              <button class="btn btn-primary btn-lg mt-3 mb-3">
                Add New Dog
              </button>
            </Link>
            <hr />
            <input
              id="searchInput"
              type="text"
              name="filterPhrase"
              className="flex"
              placeholder="Search pet name..."
              onChange={this.handleChange}
              style={{ marginBottom: "15px", width: "100%" }}
            />
            <ListGroup>{listOfDogs}</ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals.all.filter(animal => animal.species === "Dog")
  };
};
export default connect(mapStateToProps)(DogsList);
