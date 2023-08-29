import React, { useState } from 'react';
import './App.css';
import MainPage from './MainPage/MainPage';



function App() {
  const [showPackages, setShowPackages] = useState(false);

  const handleSignup = () => {
    setShowPackages(true); // Show packages when signup button is clicked
  };
  
    return (
      <div className="App">
        <MainPage onSignup={handleSignup} /> {/* Pass the onSignup callback */}
        
      </div>

  );
}

export default App;