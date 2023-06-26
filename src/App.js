import './App.css';
import DefaultLayout from './layout/DefaultLayout';

import EntryPage from './pages/entry/EntryPage';
import Dashboard from './pages/dashboard/Dashboard';
import AddTicket from './pages/newticket/AddTicket';

function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <DefaultLayout>
          {/* <Dashboard /> */}
          <AddTicket />
        </DefaultLayout>
    </div>
  );
}

export default App;
