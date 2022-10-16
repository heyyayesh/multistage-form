import React, { useState } from 'react';
import styles from './stageOne.module.css';
import img from '../assets/stage1.svg';
import styles2 from './stageTwo.module.css';

function StageOne() {
  const [address, setAdress] = useState({
    state: '',
    city: '',
    pincode: null,
    address: '',
  });

  function handleChange(e) {
    setAdress({
      ...address,
      [e.target.name]: e.target.value,
    });
  }

  console.log(address);

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
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default StageOne;
