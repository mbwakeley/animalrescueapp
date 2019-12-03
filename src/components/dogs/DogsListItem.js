import React from "react";
import { connect } from "react-redux";
import { ListGroupItem, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const DogsListItem = props => {
  //   console.log("dogs", props);
  return (
    <ListGroupItem>
      <Row>
        <Col xs="3">
          <img width="50px" src={props.animal.picture} alt="dog" />
        </Col>
        <Col xs="8">
          <Link to={`/dogs/${props.animal.id}`}>
            <h5>Name: {props.animal.name}</h5>
            <h5>Age: {props.animal.age}</h5>
          </Link>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default connect()(DogsListItem);
