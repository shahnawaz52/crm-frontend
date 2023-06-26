import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { PropTypes } from "prop-types";
import "./AddTicketForm.css";

const AddTicketFrom = ({ handleOnSubmit, handleOnChange, handleFormSwitch, formData }) => {
    console.log(formData)
    return (
        <div className="jumbotron container-fluid container add-new-ticket bg-light">
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-info text-center">Add New Ticket</h1>
                        <hr />
                        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Subject</Form.Label>
                                <Col sm={9}>
                                <Form.Control
                                    name="subject"
                                    value={formData.subject}
                                    minLength = "3"
                                    maxLength="100"
                                    onChange={handleOnChange}
                                    placeholder="Subject"
                                    required
                                />
                                </Col>
                            </Form.Group>
                            <br />
                            <Form.Group as={Row}>
                                <Form.Label column sm={3}>Issue Found</Form.Label>
                                <Col sm={9}>
                                <Form.Control
                                    type="date"
                                    name="issueDate"
                                    value={formData.issueDate}
                                    onChange={handleOnChange}
                                    required
                                />
                                </Col>
                            </Form.Group>
                            <br />
                            <Form.Group>
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="details"
                                    rows="5"
                                    value={formData.details}
                                    onChange={handleOnChange}
                                    required
                                />
                            </Form.Group>
                            <br />
                            <Button type="submit" variant="info" block>Login</Button>
                        </Form>
                        <hr />
                    </Col>
                </Row>

                {/* <Row>
                    <Col>
                        <a href="#!" onClick={() => handleFormSwitch('reset')}>Forget Password?</a>
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

AddTicketFrom.propTypes = {
    handleOnSubmit: PropTypes.func.isRequired,
    handleOnChnage: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
}

export default AddTicketFrom;