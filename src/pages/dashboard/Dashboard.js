import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import TicketTable from "../../components/TicketTable/TicketTable";
import tickets from '../../assets/data/dummytickets.json';
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";

const Dashboard = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <BreadCrumb page="Dashboard" />
                </Col>
            </Row>
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Link to="/add-ticket">
                        <Button variant="info" style={{'fontSize': '2rem', 'padding': '10px 30px'}}>
                            Add New Ticket
                        </Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="text-center mb-2">
                    <div>Total tickets: 50</div>
                    <div>Pending tickets: 5</div>
                </Col>
            </Row>
            <Row>
                <Col className="mt-2">Recently Added tickets</Col>
            </Row>
            <hr />
            <Row>
                <Col className="mt-2 recent-ticket">
                    <TicketTable tickets={tickets} />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;
