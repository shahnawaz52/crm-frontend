import React from 'react'
import { Form, Row, Col } from 'react-bootstrap'

const SearchFrom = ({  handleOnChange, searchString }) => {
  return (
    <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Search:
                </Form.Label>
                <Col ms="10">
                    <Form.Control name={searchString} onChange={handleOnChange} placeholder='Search...'/>
                </Col>
            </Form.Group>
        </Form>
    </div>
  )
}

export default SearchFrom