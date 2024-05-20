import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Cookies from 'js-cookie';

const GoogleAuthBtn = () => {
  console.log(process.env.REACT_APP_CLIENT_ID);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <GoogleLogin
        type="standard"
        theme="filled_black"
        shape="pill"
        size="large"
        width="250"
        onSuccess={(res) => {
          console.log('RES', res);
          console.log('PROFILE', res.profileObj);
        }}
        onError={(err) => {
          console.log('Login Failed', err);
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthBtn;
