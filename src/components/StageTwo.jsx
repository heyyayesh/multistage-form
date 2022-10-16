import React, { useState } from 'react';
import styles from './stageOne.module.css';
import img from '../assets/stage1.svg';
import styles2 from './stageTwo.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { next, previous } from '../features/stageSlice';
import { add } from '../features/userSlice';

function StageOne() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);

  const [address, setAdress] = useState(
    user || {
      state: '',
      city: '',
      pincode: '',
      address: '',
    }
  );

  function handleChange(e) {
    setAdress({
      ...address,
      [e.target.name]: e.target.value,
    });
  }

  function handleNext() {
    dispatch(add(address));
    dispatch(next());
  }

  // console.log(address);

  return (
    <div className={styles.container}>
      <h1>Address</h1>

      <div className={styles.wrapper}>
        <img src={img} alt='.' />

        <form className={styles.form}>
          <div className={styles2.select}>
            <select
              name='state'
              id='state'
              value={address.state}
              onChange={handleChange}
            >
              <option value=''>Select State</option>
              <option value='Odisha'>Odisha</option>
              <option value='Bihar'>Bihar</option>
              <option value='Maharashtra'>Maharashtra</option>
            </select>
          </div>

          <label>
            <input
              type='text'
              placeholder='City'
              name='city'
              value={address.city}
              onChange={handleChange}
            />
          </label>

          <label>
            <textarea
              name='address'
              placeholder='Address'
              value={address.address}
              onChange={handleChange}
            ></textarea>
          </label>

          <label>
            <input
              type='number'
              placeholder='Pincode'
              name='pincode'
              value={address.pincode}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>

      <div className={styles.controls}>
        <button onClick={() => dispatch(previous())}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default StageOne;
