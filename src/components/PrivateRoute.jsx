import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthConsumer } from "../context/authContext";

function PrivateRoute({ component: Component, ...rest }) {
  // const { authTokens } = useAuth();
  
  
  return (
    <AuthConsumer>
      {({ accessToken }) => (

        <Route
          {...rest}
          render={props =>
            accessToken ? (
              <Component {...props} />
            ) : (
                <Redirect
                  to={{ pathname: "/login", state: { referer: props.location } }}
                />
              )
          }
        />
      )
      }
    </AuthConsumer>)

}

export default PrivateRoute;