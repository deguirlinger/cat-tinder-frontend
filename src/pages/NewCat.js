import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

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
    let {form } = this.state
    form[event.target.name] = event.target.value
    this.setState({form: form})
  }
  render() {
    return(
      <div>
        <form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Name"
              onChange={this.handleChange.bind(this)}
              value={this.state.form.name}
            />
          </Form.Group>
        </form>
      </div>
    )
  }
}

export default NewCat
