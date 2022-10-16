import React, { useState } from 'react';
import styles from './stageOne.module.css';
import img from '../assets/stage1.svg';

import { useDispatch, useSelector } from 'react-redux';
import { next } from '../features/stageSlice';
import { add } from '../features/userSlice';

function StageOne() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);

  const [personalInfo, setPersonalInfo] = useState(
    user || {
      firstName: '',
      lastName: '',
      email: '',
      age: '',
      gender: '',
    }
  );

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleNext() {
    dispatch(add(personalInfo));
    dispatch(next());
  }

  return (
    <div className={styles.container}>
      <h1>Personal Details</h1>
      <div className={styles.wrapper}>
        <img src={img} alt='.' />
        <form className={styles.form}>
          <label>
            <input
              type='text'
              placeholder='Firstname'
              name='firstName'
              value={personalInfo.firstName}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              type='text'
              placeholder='Lastname'
              name='lastName'
              value={personalInfo.lastName}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              type='email'
              placeholder='Email'
              name='email'
              value={personalInfo.email}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              type='number'
              placeholder='Age'
              name='age'
              value={personalInfo.age}
              onChange={handleChange}
            />
          </label>

          <div className={styles.radioContainer}>
            <label className={styles.label}>Gender :</label>
            <div>
              <label htmlFor='male'>
                <input
                  type='radio'
                  name='gender'
                  id='male'
                  value='male'
                  checked={personalInfo.gender === 'male'}
                  onChange={handleChange}
                />
                Male
              </label>
              <label htmlFor='female'>
                <input
                  type='radio'
                  name='gender'
                  id='female'
                  value='female'
                  checked={personalInfo.gender === 'female'}
                  onChange={handleChange}
                />
                Female
              </label>
              <label htmlFor='other'>
                <input
                  type='radio'
                  name='gender'
                  id='other'
                  value='other'
                  checked={personalInfo.gender === 'other'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.controls}>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default StageOne;
