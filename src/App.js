import './App.css';
import DefaultLayout from './layout/DefaultLayout';

import EntryPage from './pages/entry/EntryPage';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicket from './pages/newticket/AddTicket';
import TicketListPage from './pages/TicketList/TicketListPage';

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
          {/* <Dashboard /> */}
          {/* <AddTicket /> */}
          <TicketListPage />
        </DefaultLayout>
    </div>
  );
}

export default App;
