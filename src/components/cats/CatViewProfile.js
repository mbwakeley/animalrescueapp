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

class CatViewProfile extends React.Component {
  render() {
    console.log("cat view", this.props.cat);

    const time = this.props.cat.adoptedDate;

    console.log("time", time);

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
                    Status: Cat Adopted On{" "}
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
              <Button
                className="mr-1"
                color="warning"
                // onClick={e => this.handleEdit(e, this.props.car.id)}
              >
                Edit
              </Button>
              <Button
                color="danger"
                // onClick={e => this.handleClick(e, this.props.car.id)}
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
export default connect(mapStateToProps)(CatViewProfile);
