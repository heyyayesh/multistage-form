import React, { useState } from 'react';
import styles from './stageOne.module.css';
import img from '../assets/stage1.svg';
import styles3 from './stageThree.module.css';
import upload from '../assets/upload-icon.svg';
import prevIcon from '../assets/previous.svg';
import nextIcon from '../assets/next.svg';
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
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!profile.username || !profile.password) {
      setErrorMsg('Username and Password Required!');
      return false;
    }

    if (profile.password.length < 8) {
      setErrorMsg('Passwords must be at least of 8 characters!!');
      return false;
    }

    if (!passwordRegex.test(profile.password)) {
      setErrorMsg(
        'Password must have at least a number and a special character!'
      );
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

      <div className={`${styles.controls} ${styles3.controls}`}>
        <button onClick={() => dispatch(previous())}>
          <img src={prevIcon} alt='.' />
        </button>
        <button onClick={handleNext}>
          <img src={nextIcon} alt='.' />
        </button>
      </div>
    </div>
  );
}

export default StageOne;
