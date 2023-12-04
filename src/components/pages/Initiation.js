import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

export default function Initiation() {
  return (
    <div>
    <ListGroup as="ol" numbered>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
      <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
    </ListGroup>
    </div>
  )
}
