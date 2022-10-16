import React, { useState } from 'react';
import styles from './stageOne.module.css';
import img from '../assets/stage1.svg';
import styles3 from './stageThree.module.css';
import upload from '../assets/upload-icon.svg';

import { useDispatch, useSelector } from 'react-redux';
import { next, previous } from '../features/stageSlice';
import { add } from '../features/userSlice';

function StageOne() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.value);

  const [profile, setProfile] = useState(
    user || {
      username: '',
      password: '',
      confirmPassword: '',
      picture: '',
    }
  );

  const [errorMsg, setErrorMsg] = useState('');

  function validate() {
    if (!profile.username || !profile.password) {
      setErrorMsg('Username and Password Required!');
      return false;
    }

    if (profile.password !== profile.confirmPassword) {
      setErrorMsg('Passwords must match!');
      return false;
    }

    setErrorMsg('');
    return true;
  }

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }

  function handleNext() {
    if (!validate()) return;

    dispatch(add(profile));
    dispatch(next());
  }

  return (
    <div className={styles.container}>
      <h1>Profile</h1>

      <div className={styles.wrapper}>
        <img src={img} alt='.' />

        <form className={styles.form}>
          <label>
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={profile.username}
              onChange={handleChange}
            />
          </label>

          <label className={styles3.file}>
            <p>
              {profile.picture
                ? `${profile.picture.substring(12)}`
                : 'Choose profile picture'}{' '}
            </p>
            <input
              type='file'
              name='picture'
              id='picture'
              onChange={handleChange}
            />
            <img src={upload} alt='upload file' />
          </label>

          <label>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={profile.password}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              type='password'
              placeholder='Confirm Password'
              name='confirmPassword'
              value={profile.confirmPassword}
              onChange={handleChange}
            />
          </label>
        </form>

        {!!errorMsg.length && <div className={styles.error}>{errorMsg}</div>}
      </div>

      <div className={styles.controls}>
        <button onClick={() => dispatch(previous())}>Previous</button>
        <button onClick={handleNext}>Submit</button>
      </div>
    </div>
  );
}

export default StageOne;
