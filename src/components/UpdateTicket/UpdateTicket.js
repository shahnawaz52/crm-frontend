import React, { useState } from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';

const UpdateTicket = ({ msg }) => {
    const [message, setMessage] = useState("");

    const handleOnChange = (e) => {
        setMessage(e.target.value);
      };

    const handleOnSubmit = () => {
        alert("form submit");
    }

    return (
        <div>
          <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <br/>
            <Form.Text>
              Please reply your message here or update the ticket
            </Form.Text>
            <Form.Control
              value={message}
              onChange={handleOnChange}
              as="textarea"
              row="5"
              name="detail"
            />
            <div className="text-right mt-3 mb-3">
              <Button variant="info" type="submit">
                Reply
              </Button>
            </div>
          </Form>
        </div>
      );
}

export default UpdateTicket