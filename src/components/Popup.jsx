import React from 'react';
import styles from './popup.module.css';

function Popup({ ok }) {
  return (
    <div className={`${styles.container} `}>
      <h1>Verification Successful!</h1>
      <button onClick={ok}>OK</button>
    </div>
  );
}

export default Popup;
