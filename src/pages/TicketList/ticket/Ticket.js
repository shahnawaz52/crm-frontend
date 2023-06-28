import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import BreadCrumb from '../../../components/BreadCrumb/BreadCrumb'
import tickets from '../../../assets/data/dummytickets.json'
import MessageHistory from '../../../components/MessageHistory/MessageHistory';
import UpdateTicket from '../../../components/UpdateTicket/UpdateTicket';
import { useParams } from 'react-router-dom';

const Ticket = () => {

    const { tId } = useParams();
    const [ticket, setTicket] = useState("");

    useEffect(() => {
        for(let i=0;i<tickets.length;i++) {
            if(tickets[i].id == tId) {
                setTicket(tickets[i])
            }
        }
    }, [tId])

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Ticket" />
                </Col>
            </Row>
            <Row>
                <Col className='text-weight-bolder text-secondary'>
                    {tId}
                    <div className='subject'>Subject: {ticket.subject}</div>
                    <div className='date'>Ticket Opened: {ticket.addedAt}</div>
                    <div className='status'>Status: {ticket.status}</div>
                </Col>
                <Col className='text-right'>
                    <Button variant='outline-info'>Close Ticket</Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    {ticket.history && <MessageHistory message={ticket.history} />}
                </Col>
            </Row>
            <hr />

            <Row className='mt-4'>
                <Col>
                    <UpdateTicket />
                </Col>
            </Row>
        </Container>
    )
}

export default Ticket