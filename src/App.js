import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import { Container, Row, Col } from "reactstrap";
import Dashboard from "./components/dashboard/Dashboard";
import Cats from "./components/cats/Cats";
import Dogs from "./components/dogs/Dogs";
import { connect } from "react-redux";
import { fetchAllAnimals } from "./store/animals/actions";
import NewCatForm from "./components/cats/NewCatForm";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchAllAnimals());
  }
  render() {
    return (
      <Router>
        <div className="App">
          <TopNav />
          <Container fluid>
            <Row>
              <Col xs="2">
                <SideNav />
              </Col>
              <Col>
                <Switch>
                  <Route exact path="/" component={Dashboard} />
                  <Route path="/dogs" component={Dogs} />
                  <Route path="/cats" component={Cats} />
                  <Route path="/newcat/" component={Cats} />
                </Switch>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
