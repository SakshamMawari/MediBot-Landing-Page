import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBarDemo } from './components/ui/tubelight-nav-demo';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Services from './pages/Services';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App bg-background min-h-screen">
          <NavBarDemo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
