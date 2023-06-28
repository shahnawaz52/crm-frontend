import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EntryPage from './pages/entry/EntryPage';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicket from './pages/newticket/AddTicket';
import TicketListPage from './pages/TicketList/TicketListPage';
import Ticket from './pages/TicketList/ticket/Ticket';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EntryPage />} />
          
          {/* <Route path="/" element={<DefaultLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/tickets" element={<TicketListPage />} />
            <Route path="/ticket/:tid" element={<Ticket />} />
          </Route> */}
                    
        </Routes>
        {/* <DefaultLayout>
          <Routes> */}
            <PrivateRoute path="/dashboard" element={<Dashboard />} />
            <PrivateRoute path="/add-ticket" element={<AddTicket />} />
            <PrivateRoute path="/tickets" element={<TicketListPage />} />
            <PrivateRoute path="/ticket/:tId" element={<Ticket />} />
          {/* </Routes>
        </DefaultLayout> */}
      </Router>
    </div>
  );
}

export default App;
