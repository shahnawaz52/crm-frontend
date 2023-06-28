import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import SearchFrom from '../../components/SearchForm/SearchFrom'
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb'
import TicketTable from '../../components/TicketTable/TicketTable'
import tickets from '../../assets/data/dummytickets.json'
import { Link } from "react-router-dom";

const TicketListPage = () => {

    const [searchString, setSearchString] = useState("");
    const [displayTickets, setDisplayTickets] = useState(tickets);

    useEffect(() => {
        
    }, [searchString, displayTickets]);

    const handleOnChange = (e) => {
        const {value} = e.target;
        setSearchString(value);
        searchTicket(value);
    }

    const searchTicket = (string) => {
        const displayTicket = tickets.filter((row) =>
            row.subject.toLowerCase().includes(string.toLowerCase())
        );
        console.log(displayTicket);

        setDisplayTickets(displayTicket);
    }

  return (
    <Container>
        <Row>
            <BreadCrumb page="Ticket List"/>
        </Row>
        <Row className='mt-4'>
            <Col>
            <Link to="/add-ticket">
                <Button variant='info'>Add New Ticket</Button>
            </Link>
            </Col>
            <Col className='text-right'>
                <SearchFrom handleOnChange={handleOnChange} searchString={searchString} />
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <TicketTable tickets={displayTickets} />
            </Col>
        </Row>
    </Container>
  )
}

export default TicketListPage