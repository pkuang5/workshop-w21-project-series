import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '528798288833-6jp9ee02c0otfb0hl3atolk4eff6pibq.apps.googleusercontent.com' //insert client id here

function Logout(props) {

  const onSuccess = () => {
    console.log('Logout made successfully');
    props.setLoggedIn(false);
    props.setName();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
