import React, { Component } from 'react'
import {
  Container, Col, Row, ListGroup
} from 'react-bootstrap'

class Dogs extends Component {
  render() {
    return (
      <Container>
        <Row>
          {/* What does the line below do? */}
          <Col xs={12}>
            <ListGroup>
            {this.props.dogs.map((dog, index) => {
              return (
                <ListGroup.Item
                  key={index} >
                  <h4>
                  <span className= 'dog-name'>
                    {dog.name}
                  </span>
                  - <small className= 'dog-age'>{dog.age} years old</small>
                  </h4>
                  <span className= 'dog-enjoys'>
                    {dog.enjoys}
                  </span>
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
    )
  }
}

export default Dogs;
