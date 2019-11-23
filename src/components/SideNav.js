import React from "react";
import ListGroup from "reactstrap/es/ListGroup";
import { NavLink } from "react-router-dom";
import ListGroupItem from "reactstrap/es/ListGroupItem";
import { connect } from "react-redux";

const SideNav = () => {
  return (
    <ListGroup className="mt-3">
      <NavLink to="/dogs">
        <ListGroupItem>dogs</ListGroupItem>
      </NavLink>
      <NavLink to="/cats">
        <ListGroupItem>cats</ListGroupItem>
      </NavLink>
    </ListGroup>
  );
};

export default connect()(SideNav);
