import React from "react";
import { connect } from "react-redux";
import { ListGroupItem, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const CatsListItem = props => {
  //   console.log("cats", props);
  return (
    <ListGroupItem>
      <Row>
        <Col xs="3">
          <img width="50px" src={props.animal.picture} alt="cat" />
        </Col>
        <Col xs="8">
          <Link to={`/cats/${props.animal.id}`}>
            <h5>{props.animal.name}</h5>
          </Link>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default connect()(CatsListItem);
// to={{
//     pathname: `/cats/${props.animal.id}`,
//     state: { currentAnimal: props.animal.id }
//   }}
