import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Parameters from './components/Parameters';
import Home from './components/Home';
import GeneralResult from './components/GeneralResult';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        <div className="grid-container">
          <Link to="/" className="Header-button">Home</Link>
          <Link to="/parameters" className="Header-button">Parameters</Link>
          <Link to="/generalresult" className="Header-button">General Result</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/parameters" element={<Parameters/>} />
          <Route path="/generalresult" element={<GeneralResult/>} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
