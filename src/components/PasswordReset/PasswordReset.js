import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PropTypes from 'prop-types';

const PasswordReset = ({handleOnChange, handleOnResetSubmit, handleFormSwitch, email}) => {

    return (
        // <div className="jumbotron container-fluid container">
        <Container>
            <Row>
                <Col>
                    <h1 className="text-info text-center">Reset Password</h1>
                    <hr />
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleOnChange}
                                placeholder="Enter Email"
                                required
                            />
                        </Form.Group>
                        <br/>
                        <Button type="submit">Reset Password</Button>
                    </Form>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="#!" onClick={() => handleFormSwitch('login')}>Login Now</a>
                </Col>
            </Row>
        </Container>
        // </div>
    )
}

PasswordReset.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    handleFormSwitch: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}

export default PasswordReset;