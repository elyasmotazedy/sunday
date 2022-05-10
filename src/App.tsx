import React from 'react';
import Header from 'layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from 'pages/Overview';
import Campaigns from 'pages/Campaigns';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Overview />}>
            <Route path="/overview" element={<Overview />} />
          </Route>
          <Route path="/campaigns" element={<Campaigns />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
