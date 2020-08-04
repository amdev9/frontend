import React, { useState } from "react";
import axios from "axios"
import { Redirect } from "react-router-dom"
import { useAuth } from '../../context/auth'
import styles from './Login.module.scss'

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();
  const referer = props.location.state.referer || '/';
  
  function postLogin(e) {
    e.preventDefault()
    axios.post("http://localhost:3000/login", {
      username: userName,
      password
    }).then(result => {
      if (result.status === 200) {
        console.log( 'result ',result)
        
        setAuthTokens(result.data.accessToken);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to={referer} />;
  }

  return (
    <div className={styles.loginForm}>
    <div className={ styles.card }>
      
      <form className={ styles.form }>
        <input 
          className={ styles.input }
          type="username"
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="email"
        />
        <input 
          className={ styles.input }
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <button className={ styles.button } onClick={postLogin}>Sign In</button>
      </form>
    </div>
    </div>
  );
}

export default Login;
