import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const GoogleAuthBtn = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <GoogleLogin
        type="standard"
        theme="filled_black"
        shape="pill"
        size="large"
        width="250"
        onSuccess={(res) => {
          const decodedRes = jwtDecode(res.credential);
          fetch('https://cut-or-die-api.onrender.com/api/v1/users/googleAuth', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: decodedRes.email,
              name: decodedRes.name,
            }),
            credentials: 'include',
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              Cookies.set('jwt', data.token, { secure: true });
            })
            .catch((error) => {
              console.log(error);
            });
        }}
        onError={(err) => {
          console.log('Login Failed', err);
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuthBtn;
