import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import ScannedData from './ScannedData';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/scanned/:data" exact element={<ScannedData />} />
      </Routes>
    </Router>
  );
}

export default App;
