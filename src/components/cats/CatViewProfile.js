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

class CatViewProfile extends React.Component {
  handleDelete(e, id) {
    console.log("delete", e);
    this.props.removeAnimal(id);
  }

  handleEdit(e, cat) {
    console.log("edit", e);
    this.props.editAnimal(cat);
  }
  render() {
    console.log("cat view", this.props.cat);
    const time = Date(this.props.cat.adoptedDate);

    return (
      <Col>
        <Card body className="mb-3">
          <div>
            <img
              width="300px"
              class="img-responsive"
              src={this.props.cat.picture}
              alt="cat"
            />
          </div>
          <CardBody>
            <CardTitle>
              <h5>Name: {this.props.cat.name}</h5>
            </CardTitle>
            <Row>
              <Col xs="5">
                <CardText>
                  <div>Age: {this.props.cat.age}</div>
                  <div>Species: {this.props.cat.species}</div>
                  <div>Breed: {this.props.cat.breed}</div>
                </CardText>
              </Col>
              <Col xs="5">
                <CardText>
                  <div>Gender: {this.props.cat.gender}</div>
                  <div>Color: {this.props.cat.color}</div>
                </CardText>
              </Col>
            </Row>
            <Row>
              <CardText>
                {this.props.cat.adopted ? (
                  <div>
                    Status: Adopted On{" "}
                    <Moment format="MM-DD-YYYY">{time}</Moment>
                  </div>
                ) : (
                  <div>Status: Available</div>
                )}
              </CardText>
            </Row>
            <Row>
              <CardText>
                <div>About: {this.props.cat.about}</div>
              </CardText>
            </Row>
            <Row>
              <Link to={`/cats/${this.props.cat.id}/editcat`}>
                <Button
                  className="mr-1"
                  color="warning"
                  onClick={e => this.handleEdit(e, this.props.cat)}
                >
                  Edit
                </Button>
              </Link>
              <Button
                color="danger"
                onClick={e => this.handleDelete(e, this.props.cat.id)}
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
  CatViewProfile
);
