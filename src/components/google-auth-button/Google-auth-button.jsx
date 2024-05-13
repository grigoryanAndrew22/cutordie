import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const GoogleAuthBtn = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <GoogleLogin
        type='standard'
        theme='filled_black'
        shape='pill'
        size='large'
        width='250'
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthBtn;
