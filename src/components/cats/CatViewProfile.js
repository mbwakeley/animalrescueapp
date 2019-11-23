import React from "react";
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap";
import Moment from "react-moment";
import { connect } from "react-redux";

class CatViewProfile extends React.Component {
  render() {
    console.log("cat view", this.props);
    return (
      <Col>
        <Card body className="mb-3">
          <div>
            <img
              width="300px"
              class="img-responsive"
              src={this.props.animal.picture}
              alt="cat"
            />
          </div>
          <CardBody>
            <CardTitle>
              <h5>Name: {this.props.animal.name}</h5>
            </CardTitle>
            <Row>
              <Col xs="5">
                <CardText>
                  <div>Age: {this.props.animal.age}</div>
                  <div>Species: {this.props.animal.species}</div>
                  <div>Breed: {this.props.animal.breed}</div>
                </CardText>
              </Col>
              <Col xs="5">
                <CardText>
                  <div>Gender: {this.props.animal.gender}</div>
                  <div>Color: {this.props.animal.color}</div>
                </CardText>
              </Col>
            </Row>
            <Row>
              <CardText>
                {this.props.animal.adopted ? (
                  <div>
                    Status: Cat Adopted On{" "}
                    <Moment format="MM-DD-YYYY">
                      {this.props.animal.adoptedDate}
                    </Moment>
                  </div>
                ) : (
                  <div>Status: Available</div>
                )}
              </CardText>
            </Row>
            <Row>
              <CardText>
                <div>About: {this.props.animal.about}</div>
              </CardText>
            </Row>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    animal: state.animals.all.find(
      animal => animal.id === props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(CatViewProfile);
