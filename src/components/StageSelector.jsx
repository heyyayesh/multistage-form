import React from 'react';
import styles from './stageSelector.module.css';

function StageSelector({ stage }) {
  return (
    <div className={styles.container}>
      <div className={stage === 1 ? styles.selected : ''}>1</div>
      <span></span>
      <div className={stage === 2 ? styles.selected : ''}>2</div>
      <span></span>
      <div className={stage === 3 ? styles.selected : ''}>3</div>
      <span></span>
      <div className={stage === 4 ? styles.selected : ''}>4</div>
    </div>
  );
}

export default StageSelector;
