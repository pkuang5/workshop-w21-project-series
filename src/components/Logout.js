import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = ; //insert client id here

function Logout() {

  const [clickedLogoutButton, setClickedLogoutButton] = useState(false)
  const [logoutMessage, setLogoutMessage] = useState("Bye Bye ✌")

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    setClickedLogoutButton(true);
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
      {clickedLogoutButton? <p>{logoutMessage}</p>: <p></p>}
    </div>
  );
}

export default Logout;
