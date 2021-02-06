 
import React, { useState } from 'react'

import { GoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId = '528798288833-6jp9ee02c0otfb0hl3atolk4eff6pibq.apps.googleusercontent.com' //insert client id here

function Login(props) {

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    refreshTokenSetup(res);
    props.setLoggedIn(true);
    props.setGoogleObj(res.profileObj)
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login 😢. Please try again`
    );
  };

  
  return (

    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
