import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        enjoys: ''
      }
    }
  }

  handleChange(event){
    let { form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }

  handleSubmit() {
    this.props.onSubmit(this.state.form)
  }

  render() {
    return(
      <div>
        <form>
          <Form.Group controlId="name">
            <Form.Label id = "name">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
          </Form.Group>
          <Form.Group controlId="age">
            <Form.Label id = "age">Age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              placeholder="Age"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.age}
            />
          </Form.Group>
          <Form.Group controlId="enjoys">
            <Form.Label id = "enjoys">Enjoys</Form.Label>
            <Form.Control
              type="text"
              name="enjoys"
              placeholder="Enjoys"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.enjoys}
            />
          </Form.Group>
          <Button id="submit" variant="primary" type="button" onClick={this.handleSubmit.bind(this)}>
            Create Cat Profile
          </Button>
        </form>
      </div>
    )
  }
}

export default NewCat
