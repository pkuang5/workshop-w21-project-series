import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '528798288833-6jp9ee02c0otfb0hl3atolk4eff6pibq.apps.googleusercontent.com';

function Logout() {

  const [isLoggedIn, setLoggedIn] = useState(true)
  const [logoutMessage, setLogoutMessage] = useState("Bye Bye ✌")

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    setLoggedIn(false);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
      {!isLoggedIn ? <p>{logoutMessage}</p>: <p></p>}
    </div>
  );
}

export default Logout;
