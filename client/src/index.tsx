import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { ScholarlyMail } from './components/scholarlyMail';

const container = document.getElementById('root');

const App = () => {
    return (
        <Router>
          <ScholarlyMail />
        </Router>
      );
};

if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
  }