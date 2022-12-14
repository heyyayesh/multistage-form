import React, { useState } from 'react';
import styles from './stageOne.module.css';
import img from '../assets/stage1.svg';
import styles4 from './verification.module.css';
import prevIcon from '../assets/previous.svg';
import nextIcon from '../assets/next.svg';
import { useDispatch } from 'react-redux';
import { previous } from '../features/stageSlice';
import { verify } from '../features/userSlice';
import Popup from './Popup';

const OTP = '1234';

function StageOne() {
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('');

  const [popupVisible, setPopupVisible] = useState(false);

  const [errorMsg, setErrorMsg] = useState('');

  function validate() {
    if (otp !== OTP) {
      setErrorMsg("OTP Doesn't Match! (Current Placeholder OTP: 1234)");
      return false;
    }

    setErrorMsg('');
    return true;
  }

  function handleChange(e) {
    if (e.target.value.length > 4) return;
    setOtp(e.target.value);
  }

  function handleNext() {
    if (!validate()) return;

    dispatch(verify());
    setPopupVisible(true);
  }

  function handleClick() {
    setPopupVisible(false);
    setOtp('');
  }

  return (
    <div className={styles.container}>
      <h1>Verify Phone Number</h1>

      <div className={styles.wrapper}>
        <img src={img} alt='.' />

        <form className={styles.form}>
          <label>
            <input
              className={styles4.otp}
              type='text'
              placeholder='Enter OTP'
              name='otp'
              value={otp}
              onChange={handleChange}
            />
          </label>
          <button type='button' className={styles4.resend}>
            Resend
          </button>
        </form>

        {!!errorMsg.length && <div className={styles.error}>{errorMsg}</div>}
      </div>

      <div className={`${styles.controls} ${styles4.controls}`}>
        <button onClick={() => dispatch(previous())}>
          <img src={prevIcon} alt='.' />
        </button>
        <button onClick={handleNext}>
          <img src={nextIcon} alt='.' />
        </button>
      </div>

      {popupVisible && <Popup ok={handleClick} />}
    </div>
  );
}

export default StageOne;
