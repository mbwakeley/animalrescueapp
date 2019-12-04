import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  Col,
  Row
} from "reactstrap";
import Moment from "react-moment";
import { connect } from "react-redux";
import { removeAnimal, editAnimal } from "../../store/animals/actions";
import { Link } from "react-router-dom";

class DogViewProfile extends React.Component {
  handleDelete(e, id) {
    console.log("delete", e);
    this.props.removeAnimal(id);
  }

  handleEdit(e, dog) {
    console.log("edit", e);
    this.props.editAnimal(dog);
  }

  render() {
    console.log("dog view", this.props.dog);

    const time = Date(this.props.dog.adoptedDate);

    return (
      <Col>
        <Card body className="mb-3">
          <div>
            <img
              width="300px"
              class="img-responsive"
              src={this.props.dog.picture}
              alt="dog"
            />
          </div>
          <CardBody>
            <CardTitle>
              <h5>Name: {this.props.dog.name}</h5>
            </CardTitle>
            <Row>
              <Col xs="5">
                <CardText>
                  <div>Age: {this.props.dog.age}</div>
                  <div>Species: {this.props.dog.species}</div>
                  <div>Breed: {this.props.dog.breed}</div>
                </CardText>
              </Col>
              <Col xs="5">
                <CardText>
                  <div>Gender: {this.props.dog.gender}</div>
                  <div>Color: {this.props.dog.color}</div>
                </CardText>
              </Col>
            </Row>
            <Row>
              <CardText>
                {this.props.dog.adopted ? (
                  <div>
                    Status: Dog Adopted On{" "}
                    <Moment format="MM-DD-YYYY">{time}</Moment>
                  </div>
                ) : (
                  <div>Status: Available</div>
                )}
              </CardText>
            </Row>
            <Row>
              <CardText>
                <div>About: {this.props.dog.about}</div>
              </CardText>
            </Row>
            <Row>
              <Link to={`/dogs/${this.props.dog.id}/editdog`}>
                <Button
                  className="mr-1"
                  color="warning"
                  onClick={e => this.handleEdit(e, this.props.dog)}
                >
                  Edit
                </Button>
              </Link>
              <Button
                color="danger"
                onClick={e => this.handleDelete(e, this.props.dog.id)}
              >
                Delete
              </Button>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    animal: state.animals.all
  };
};
export default connect(mapStateToProps, { removeAnimal, editAnimal })(
  DogViewProfile
);
