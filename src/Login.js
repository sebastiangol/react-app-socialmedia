import React, { useState } from 'react';
import './Login.css';
import logo from './images/logo.png';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch();

  const loginToApp = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL
          })
        );
      })
      .catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert('Please enter a name');
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic
              })
            );
          });
      })
      .catch(error => alert(error));
  };

  return (
    <div className="login">
      <img src={logo} alt="" />
      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder="Profile Picture URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>

      <p className="login__p">
        No account?{' '}
        <span className="login__register" onClick={register}>
          Register Here
        </span>
      </p>
      <p>Don't want to?</p>
      <div className="login__guest">
      <p>Email:{' '} guest@gmail.com</p>
      <p>Password:{' '} guestguest</p>
      </div>
    </div>
  );
}

export default Login;
