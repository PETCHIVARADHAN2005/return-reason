import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Setting from './Components/Setting';
import ReturnReasonComponent from './Components/ReturnReason';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="settings" element={<Setting />}>
            <Route path="return-reasons" element={<ReturnReasonComponent />} />
            {/* <Route index element={<div>Settings Dashboard Placeholder</div>} /> */}
          </Route>
          {/* <Route index element={<div>Dashboard Placeholder</div>} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;