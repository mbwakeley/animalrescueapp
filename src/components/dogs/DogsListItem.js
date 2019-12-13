import React from "react";
import { connect } from "react-redux";
import { ListGroupItem, Row, Col, Badge } from "reactstrap";
import { Link } from "react-router-dom";

const DogsListItem = props => {
  const dogPicture = props.animal.picture + `${props.animal.id}`;

  return (
    <ListGroupItem>
      <Row>
        <Col xs="4">
          <img width="100px" src={dogPicture} alt="donpg" />
          {props.animal.adopted ? (
            <Badge color="success">Adopted</Badge>
          ) : (
            <Badge color="primary">Available</Badge>
          )}
        </Col>
        <Col xs="8">
          <Link to={`/dogs/${props.animal.id}`}>
            <h5>Name: {props.animal.name}</h5>
            <h5>Age: {props.animal.age}</h5>
            <h5>Gender: {props.animal.gender}</h5>
            <h5>Breed: {props.animal.breed}</h5>
          </Link>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default connect()(DogsListItem);
