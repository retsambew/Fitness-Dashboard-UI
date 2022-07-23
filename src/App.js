import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Dashboard from './components/dashboard/index.js';

function App() {
  return (
    <div>
      <Router>
        <Dashboard/>
      </Router>
    </div>
  );
}

export default App;
