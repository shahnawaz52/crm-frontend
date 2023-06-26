import { Container, Row, Col } from "react-bootstrap";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import AddTicketFrom from "../../components/AddTicketForm/AddTicketForm";
import { useEffect, useState } from "react";

const initialFormData = {
    subject: '',
    issueDate: '',
    details: ''
}
const AddTicket = () => {

    const [formData, setFormData] = useState(initialFormData);
    
    useEffect(() => {

    }, [formData]);

    const handleOnChange = (e) => {
        const {name, value} = e.target;
   
        setFormData({
            ...formData, 
            [name]: value
        })
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log('Form submit request recived');
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="New Ticket" />
                </Col>
            </Row>

            <Row>
                <Col>
                    <AddTicketFrom handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formData={formData} />
                </Col>
            </Row>
        </Container>
    )
}

export default AddTicket;
