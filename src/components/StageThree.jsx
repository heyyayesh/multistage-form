import React, { useState } from 'react';
import styles from './stageOne.module.css';
import img from '../assets/stage1.svg';
import styles3 from './stageThree.module.css';
import upload from '../assets/upload-icon.svg';

function StageOne() {
  const [profile, setProfile] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    picture: '',
  });

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value || e.target.files[0],
    });
  }

  console.log(profile);

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
      </div>

      <div className={styles.controls}>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}

export default StageOne;
