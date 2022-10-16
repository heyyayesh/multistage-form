import React from 'react';
import './App.css';
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';
import StageThree from './components/StageThree';
import StageSelector from './components/StageSelector';
import { useSelector } from 'react-redux';

function App() {
  const stage = useSelector(state => state.stage.value);
  console.log(stage);

  return (
    <div className='App'>
      <StageSelector stage={stage} />
      {stage === 1 ? <StageOne /> : stage === 2 ? <StageTwo /> : <StageThree />}
    </div>
  );
}

export default App;
