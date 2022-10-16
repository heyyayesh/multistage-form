import React from 'react';
import './App.css';
import StageOne from './components/StageOne';
import StageTwo from './components/StageTwo';
import StageThree from './components/StageThree';
import StageSelector from './components/StageSelector';
import { useSelector } from 'react-redux';
import Verification from './components/Verification';

function App() {
  const stage = useSelector(state => state.stage.value);
  const user = useSelector(state => state.user.value);

  console.log(stage);
  console.log(user);

  return (
    <div className='App'>
      {stage <= 3 && <StageSelector stage={stage} />}
      {stage === 1 ? (
        <StageOne />
      ) : stage === 2 ? (
        <StageTwo />
      ) : stage === 3 ? (
        <StageThree />
      ) : (
        <Verification />
      )}
    </div>
  );
}

export default App;
