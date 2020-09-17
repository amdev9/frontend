import React, { Component } from "react";
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

class Auth extends Component {
  constructor() {
    super()

    
    const tokens = localStorage.getItem('tokens') || ""
    this.state = {
      authenticated: false,
      user: {
        role: "visitor" // TODO: add user persistance https://joshwcomeau.com/react/persisting-react-state-in-localstorage/
      },
      accessToken: tokens,
    };

    

  }
  
  setUser = (data) => {
    localStorage.setItem('user', JSON.stringify(data) || {
      role: "visitor" 
    });
    // setAuthTokens(data);
  }

  setToken = token => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };
  
  

  setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data) || '');
    // setAuthTokens(data);
  }

  initiateLogin = ({ email, password }, e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/api/auth/login", {
      email,
      password
    }).then(result => {
      if (result.status === 200) {
        this.setSession(result.data); 
      } else {
        // setIsError(true);
      }
    }).catch(e => {
      // setIsError(true);
    });

  };

  signUpHandler = (e, {email, password, firstName, lastName}) => {
    e.preventDefault()
    axios.post("http://localhost:3000/api/auth/register", {
      email,
      password,
      lastName,
      firstName,
    }).then(result => {
      if (result.status === 200) {
        this.setSession(result.data); 
        // setAuthTokens(result.data.accessToken);
        // setLoggedIn(true);
      } else {
        // setIsError(true);
      }
    }).catch(e => {
      // setIsError(true);
    });
  }


  logout = () => {
    this.setState({
      authenticated: false,
      user: {
        role: "visitor"
      },
      accessToken: ""
    });
  };

  setSession(data) {
    const { user, token } = data
    // const localUser = {
    //   id: user.id,
    //   email: user.email,
    //   role: user.role,
    // };
    this.setState({
      authenticated: true,
      accessToken: token,
      user,
    });
    this.setUser(user)
    this.setToken(token)
    this.setTokens(token)
  }

  render() {
    const authProviderValue = {
      ...this.state,
      initiateLogin: this.initiateLogin,
      handleAuthentication: this.handleAuthentication,
      signUpHandler: this.signUpHandler,
      logout: this.logout
    };
    return (
      <AuthProvider value={authProviderValue}>
        {this.props.children}
      </AuthProvider>
    );
  }
}

export default Auth;
