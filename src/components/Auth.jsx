import React, { useState, Component } from "react";
// import auth0 from "auth0-js";
import axios from "axios"

// import {AUTH_CONFIG} from "../auth0-variables";
import { AuthProvider } from "../context/authContext";

// const auth = new auth0.WebAuth({
//   domain: AUTH_CONFIG.domain,
//   clientID: AUTH_CONFIG.clientId,
//   redirectUri: AUTH_CONFIG.callbackUrl,
//   audience: `https://${AUTH_CONFIG.domain}/userinfo`,
//   responseType: "token id_token"
// });

function Auth(props) {
  // constructor() {
  //   super()

  const tokens = localStorage.getItem('tokens') || ""
  const [authenticated, setAuthenticated] = useState(false)
  const [user, setUser] = useState({
    role: "visitor"
  })
  const [accessToken, setAccessToken] = useState(tokens)

  // this.state = {
  //   authenticated: false,
  //   user: {
  //     role: "visitor" // TODO: add user persistance https://joshwcomeau.com/react/persisting-react-state-in-localstorage/
  //   },
  //   accessToken: tokens,
  // };



  // }

  
  function setTokens(data) {
    localStorage.setItem('tokens', JSON.stringify(data) || '');
    // setAuthTokens(data);
  }
  function setSession(data) {
    const { user: userData, token } = data
    // const localUser = {
    //   id: user.id,
    //   email: user.email,
    //   role: user.role,
    // };
    // this.setState({
    //   authenticated: true,
    //   accessToken: token,
    //   user,
    // });

    setAuthenticated(true)
    setAccessToken(token)
    setUser(userData)
    setTokens(token)

  }

  async function initiateLogin({ email, password }, e) {
    e.preventDefault()
    try {
      const result = await axios.post("http://localhost:3000/api/auth/login", {
        email,
        password
      })

      if (result.status === 200) {
        setSession(result.data);
        // this.
      } else {
        // setIsError(true);
      }

    } catch (e) {
      console.log('error axios ', e)
    }

  }


  async function signUpHandler(e, { email, password, firstName, lastName }) {
    e.preventDefault()
    const result = await axios.post("http://localhost:3000/api/auth/register", {
      email,
      password,
      lastName,
      firstName,
    })
    if (result.status === 200) {
      setSession(result.data);
      // this.
      // setAuthTokens(result.data.accessToken);
      // setLoggedIn(true);
    } else {
      // setIsError(true);
    }
  }


  function logout() {

    setAuthenticated(false)
    setAccessToken('')
    setUser({
      role: "visitor"
    })

    // this.setState({
    //   authenticated: false,
      // user: {
      //   role: "visitor"
      // },
    //   accessToken: ""
    // });
  };

  

  // render() {
  const authProviderValue = {
    // ...this.state,

    authenticated,
    user,
    accessToken,
    initiateLogin: initiateLogin,
    // handleAuthentication: handleAuthentication,
    signUpHandler: signUpHandler,
    logout: logout
  };
  return (
    <AuthProvider value={authProviderValue}>
      {props.children}
    </AuthProvider>
  );
  // }
}


export default Auth;
