import React, { useState } from "react";
import axios from "axios"
import { Redirect, Link } from "react-router-dom"
// import { useAuth } from '../../context/auth'
import styles from './Login.module.scss'
import { AuthConsumer } from "../../context/authContext";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoggedIn, setLoggedIn] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const { setAuthTokens } = useAuth();
  const referer = props.location.state.referer || '/';
  

  // function postLogin(e) {
  //   e.preventDefault()
  //   axios.post("http://localhost:3000/api/auth/login", {
  //     email: userName,
  //     password
  //   }).then(result => {
  //     if (result.status === 200) {
  //       console.log( 'result ',result)

  //       setAuthTokens(result.data.token);
  //       setLoggedIn(true);
  //     } else {
  //       setIsError(true);
  //     }
  //   }).catch(e => {
  //     setIsError(true);
  //   });
  // }

  // if (isLoggedIn) {
  //   return <Redirect to={referer} />;
  // }

  return (
    <AuthConsumer>
      {({ initiateLogin, authenticated }) => {

        if (authenticated) {
          return <Redirect to={referer} />;
        }
        return (
          <div className={styles.loginForm}>
            <div className={styles.card}>

              <form className={styles.form}>
                <input
                  className={styles.input}
                  type="username"
                  value={userName}
                  onChange={e => {
                    setUserName(e.target.value);
                  }}
                  placeholder="email"
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
                <button className={styles.button} onClick={(e) => initiateLogin({ email: userName, password }, e)}>Sign In</button>
                <Link to="/register">
                  <button className={styles.button} >Sign Up</button>
                </Link>
              </form>
            </div>
          </div>
        )
      }
      }
    </AuthConsumer>
  );
}

export default Login;
