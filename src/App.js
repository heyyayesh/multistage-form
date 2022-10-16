import React, { useState } from 'react';
import './App.css';
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';
import StageThree from './components/StageThree';
import StageSelector from './components/StageSelector';

function App() {
  const [selectedStage, setSelectedStage] = useState(2);

  return (
    <div className='App'>
      <StageSelector stage={selectedStage} />
      {selectedStage === 1 ? (
        <StageOne />
      ) : selectedStage === 2 ? (
        <StageTwo />
      ) : (
        <StageThree />
      )}
    </div>
  );
}

export default App;
