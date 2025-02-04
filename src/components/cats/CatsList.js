import React from "react";
import { ListGroup } from "reactstrap";
import CatsListItem from "./CatsListItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CatsList extends React.Component {
  state = {
    filterPhrase: ""
  };

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const cats = this.props.animals;
    const listOfCats = cats
      .filter(cat => cat.name.toLowerCase().includes(this.state.filterPhrase))
      .map(animal => <CatsListItem key={animal.id} animal={animal} />);

    console.log("list of cats", cats);

    return (
      <div style={{ display: "flex" }}>
        <div class="container">
          <div class="col">
            <Link to={`/cats/newCat/`}>
              <button class="btn btn-primary btn-lg mt-3 mb-3">
                Add New Cat
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
            <ListGroup>{listOfCats}</ListGroup>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals.all.filter(animal => animal.species === "Cat")
  };
};
export default connect(mapStateToProps)(CatsList);
