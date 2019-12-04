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
import { editAnimal } from "../../store/animals/actions";

class EditDogForm extends React.Component {
  state = {
    name: this.props.name,
    age: this.props.age,
    species: "Dog",
    breed: this.props.breed,
    color: this.props.color,
    gender: this.props.gender,
    adopted: this.props.adopted,
    adoptedDate: this.props.adoptedDate,
    picture: "http://placehold.it/32x32",
    about: this.props.about
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editAnimal(this.props.dog.id, {
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
  };

  render() {
    console.log("edit dog field", this.state);
    return (
      <div>
        <div style={{ display: "flex" }}>
          <div class="container">
            <h2 class="text-center mt-5">Edit Dog Information</h2>
            <div class="col">
              <hr />
              <Form onSubmit={this.handleSubmit}>
                <FormGroup className="mr-2">
                  <Label for="name">Name</Label>
                  <Input
                    placeholder={this.props.dog.name}
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
                        placeholder={this.props.dog.breed}
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
                        placeholder={this.props.dog.age}
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
                        placeholder={this.props.dog.gender}
                        type="text"
                        name="gender"
                        id="gender"
                        value={this.state.gender}
                        onChange={e =>
                          this.setState({ gender: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="color">Color</Label>
                      <Input
                        placeholder={this.props.dog.color}
                        type="text"
                        name="color"
                        id="color"
                        value={this.state.color}
                        onChange={e => this.setState({ color: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="exampleSelect">Status</Label>
                      <Input
                        type="select"
                        name="adopted"
                        id="adopted"
                        value={this.state.adopted}
                        onChange={e =>
                          this.setState({ adopted: e.target.value })
                        }
                      >
                        <option></option>
                        <option value={false}>Available</option>
                        <option value={true}>Adopted</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4}>
                    <FormGroup>
                      <Label for="adoptedDate">Adopted Date</Label>
                      <Input
                        type="date"
                        name="adoptedDate"
                        id="adoptedDate"
                        onChange={e =>
                          this.setState({ adoptedDate: e.target.value })
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row form>
                  <Col>
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
                        placeholder={this.props.dog.about}
                        type="textarea"
                        name="about"
                        id="about"
                        value={this.state.about}
                        onChange={e => this.setState({ about: e.target.value })}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Button>Save</Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // animals: state.animals.all
  };
};
export default connect(mapStateToProps, { editAnimal })(EditDogForm);
