import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        {/* Add more routes here as your app grows */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
