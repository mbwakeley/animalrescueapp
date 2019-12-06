import React from "react";
import { connect } from "react-redux";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Col,
  Label,
  Row,
  FormText
} from "reactstrap";
import { addAnimal } from "../../store/animals/actions";

class NewDogForm extends React.Component {
  state = {
    name: "",
    age: "",
    species: "Dog",
    breed: "",
    color: "",
    gender: "",
    adopted: false,
    adoptedDate: "",
    picture: "https://placedog.net/500/280?id=",
    about: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addAnimal({
      name: this.state.name,
      age: this.state.age,
      species: this.state.species,
      breed: this.state.breed,
      color: this.state.color,
      gender: this.state.gender,
      adopted: this.state.adopted,
      adoptedDate: this.state.adoptedDate,
      picture: this.state.picture,
      about: this.state.about
    });
    this.setState({
      name: "",
      age: "",
      species: "Dog",
      breed: "",
      color: "",
      gender: "",
      adopted: false,
      adoptedDate: "",
      picture: "https://placedog.net/500/280?id=",
      about: ""
    });
  };

  render() {
    console.log("newdogform", this.state);
    return (
      <div style={{ display: "flex" }}>
        <div class="container">
          <h2 class="text-center mt-5">Add New Dog</h2>
          <div class="col">
            <hr />
            <Form onSubmit={this.handleSubmit}>
              <FormGroup className="mr-2">
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name}
                  onChange={e => this.setState({ name: e.target.value })}
                />
              </FormGroup>
              <Row form>
                <Col md={4}>
                  <FormGroup>
                    <Label for="breed">Breed</Label>
                    <Input
                      type="text"
                      name="breed"
                      id="breed"
                      value={this.state.breed}
                      onChange={e => this.setState({ breed: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                      type="text"
                      name="age"
                      id="age"
                      value={this.state.age}
                      onChange={e => this.setState({ age: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="gender">Gender</Label>
                    <Input
                      type="text"
                      name="gender"
                      id="gender"
                      value={this.state.gender}
                      onChange={e => this.setState({ gender: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={5}>
                  <FormGroup>
                    <Label for="color">Color</Label>
                    <Input
                      type="text"
                      name="color"
                      id="color"
                      value={this.state.color}
                      onChange={e => this.setState({ color: e.target.value })}
                    />
                  </FormGroup>
                </Col>
                <Col md={5}>
                  <FormGroup>
                    <Label for="picture">picture</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted"></FormText>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="about">About</Label>
                    <Input
                      type="textarea"
                      name="about"
                      id="about"
                      value={this.state.about}
                      onChange={e => this.setState({ about: e.target.value })}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button>Add Dog</Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  return {};
};
export default connect(mapStateToProps, { addAnimal })(NewDogForm);
