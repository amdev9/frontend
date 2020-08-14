import React, { useState } from "react";
import axios from "axios"
import { Redirect } from "react-router-dom"
import { useAuth } from '../../context/auth'
import styles from './Login.module.scss'

function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();
  // const referer = props.location.state.referer || '/';

  function postLogin(e) {
    e.preventDefault()
    axios.post("http://localhost:3000/api/auth/register", {
      email,
      password,
      lastName,
      firstName,
    }).then(result => {
      if (result.status === 200) {
        console.log('result ', result)

        // TODO: add role rbac
        // setAuthTokens(result.data.accessToken);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  // if (isLoggedIn) {
  //   return <Redirect to={referer} />;
  // }

  return (
    <div className={styles.loginForm}>
      <div className={styles.card}>

        <form className={styles.form}>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder="email"
          />
          <input
            className={styles.input}
            type="firstName"
            value={firstName}
            onChange={e => {
              setFirstName(e.target.value);
            }}
            placeholder="firstName"
          />

          <input
            className={styles.input}
            type="lastName"
            value={lastName}
            onChange={e => {
              setLastName(e.target.value);
            }}
            placeholder="lastName"
          />

          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="password"
          />
          <button className={styles.button} onClick={postLogin}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
