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
  state = {
    authenticated: false,
    user: {
      role: "visitor"
    },
    accessToken: ""
  };

  initiateLogin = ({ email, password }, e) => {
    e.preventDefault()
    axios.post("http://localhost:3000/api/auth/login", {
      email,
      password
    }).then(result => {
      if (result.status === 200) {
        console.log('result ', result)
        this.setSession(result.data); 

        // setAuthTokens(result.data.token);
        // setLoggedIn(true);
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
        console.log('result ', result)
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
    console.log('logout')
    this.setState({
      authenticated: false,
      user: {
        role: "visitor"
      },
      accessToken: ""
    });
  };

  handleAuthentication = () => {

    // console.log('auth.parseHash', location.hash)
    // auth.parseHash((error, authResult) => {
    //   if (error) {
    //     console.log(error);
    //     console.log(`Error ${error.error} Occured`);
    //     return;
    //   }

    //   this.setSession(authResult.idTokenPayload);
    // });
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
