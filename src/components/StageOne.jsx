import React, { useState } from 'react';
import styles from './stageOne.module.css';
import img from '../assets/stage1.svg';

function StageOne() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    gender: '',
  });

  function handleChange(e) {
    setPersonalInfo({
      ...personalInfo,
      [e.target.name]: e.target.value,
    });
  }

  console.log(personalInfo);

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
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>
        </form>
      </div>

      <div className={styles.controls}>
        <button>Next</button>
      </div>
    </div>
  );
}

export default StageOne;
