import { signInStyles } from './SignInForm.styles';
import orDivider from '../../assets/images/orDivider.svg';
import googleIcon from '../../assets/images/googleIcon.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import facebookIcon from '../../assets/images/facebookIcon.svg';
import leftTopCorner from '../../assets/images/leftTopCorner.svg';
import leftBotCorner from '../../assets/images/leftBotCorner.svg';
import rightTopCorner from '../../assets/images/rightTopCorner.svg';
import rightBotCorner from '../../assets/images/rightBotCorner.svg';
import signInBtnUA from '../../assets/images/button3UA.svg';
import './SignInForm.css';
import { Fragment, useRef, useState } from 'react';
import { SignInFormMobile } from '../signin-formMobile/SignInFormMobile';
import { SignUpForm } from '../signupForm/SignUpForm';
import { SignUpFormMobile } from '../signupFormMobile/SignUpFormMobile';
import axios from 'axios';

const formLangs = {
  en: {
    title: 'SIGN IN',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot password?',
    dontHaveAcc: ['Don`t have an account?', 'Sign up'],
    or: 'OR',
    signinWith: 'Sign in with:',
  },
  ua: {
    title: 'УВІЙТИ',
    email: 'Пошта',
    password: 'Пароль',
    forgotPassword: 'Забули пароль?',
    dontHaveAcc: ['Не маєте аккаунту?', 'Реєстрація'],
    or: 'АБО',
    signinWith: 'Увійти через:',
  },
};

export const SignInForm = (props: any) => {
  const emailField: any = useRef(null);
  const passwordField: any = useRef(null);

  const [signUpFormVisible, switchSignUp] = useState(false);

  document.addEventListener('keydown', (e: any) => {
    if (e.key === 'Escape') {
      switchSignUp(false);
      props.switch(false);
    }
  });

  const login = (e: any) => {
    e.preventDefault();
    closeForm();

    axios
      .post('https://cut-or-die-api.onrender.com/api/v1/users/signin', {
        email: emailField.current.value,
        password: passwordField.current.value,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    emailField.current.value = '';
    passwordField.current.value = '';
  };

  const closeForm = () => {
    props.switch(false);
  };

  const switchToSignUp = (e: any) => {
    e.preventDefault();
    props.switch(false);
    switchSignUp(true);
  };

  const signinBtn =
    props.language === 'en'
      ? require('../../assets/images/signInBtn.png')
      : signInBtnUA;

  const generatedForm = props.language === 'en' ? formLangs.en : formLangs.ua;

  return (
    <Fragment>
      <SignInFormMobile
        visible={props.visible}
        switch={props.switch}
        language={props.language}
        switch2={switchToSignUp}
      />
      <SignUpForm
        visible={signUpFormVisible}
        switch={switchSignUp}
        switchSignin={props.switch}
        language={props.language}
      />
      <div
        className='overlay'
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          background: '#000',
          opacity: '83%',
          zIndex: 2,
          display: props.visible && !signUpFormVisible ? 'block' : 'none',
        }}
      ></div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: props.visible && !signUpFormVisible ? 'flex' : 'none',
          justifyContent: 'center',
        }}
      >
        <div className='signin-wrapper' style={signInStyles.signinWrapper}>
          <img
            src={leftTopCorner}
            style={{
              position: 'absolute',
              left: '-4px',
              top: '-4px',
              width: '42px',
            }}
          />
          <img
            src={rightTopCorner}
            style={{
              position: 'absolute',
              right: '-4px',
              top: '-4px',
              width: '42px',
            }}
          />
          <img
            src={rightBotCorner}
            style={{
              position: 'absolute',
              right: '-4px',
              bottom: '-4px',
              width: '42px',
            }}
          />
          <img
            src={leftBotCorner}
            style={{
              position: 'absolute',
              left: '-4px',
              bottom: '-4px',
              width: '42px',
            }}
          />
          <div className='signin-title' style={signInStyles.signInTitle}>
            <p style={{ display: 'inline', fontSize: '49px' }}>
              {generatedForm.title}
            </p>
            <button
              className='close'
              style={signInStyles.closeButton}
              onClick={closeForm}
            >
              X
            </button>
          </div>
          <form
            className='signin-form'
            style={{ width: '90%' }}
            onSubmit={login}
          >
            <label
              htmlFor='email'
              style={{
                display: 'block',
                fontFamily: 'Bitter',
                fontSize: '22px',
                paddingBottom: '9px',
              }}
            >
              {generatedForm.email}
            </label>

            <input
              ref={emailField}
              className='email-input'
              placeholder={generatedForm.email}
              type='email'
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                height: '30px',
                fontFamily: 'Bitter',
                color: '#444444',
                fontSize: '16px',
                fontWeight: '600',
              }}
            />

            <div
              className='password-label'
              style={{
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-between',
              }}
            >
              <label
                htmlFor='password'
                style={{
                  fontFamily: 'Bitter',
                  fontSize: '22px',
                  paddingBottom: '9px',
                }}
              >
                {generatedForm.password}
              </label>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'Bitter',

                  alignSelf: 'center',
                }}
              >
                {generatedForm.forgotPassword}
              </p>
            </div>
            <input
              ref={passwordField}
              className='password-input'
              type='password'
              placeholder={generatedForm.password}
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                fontFamily: 'Bitter',
                height: '30px',
                color: '#444444',
                fontSize: '16px',
                fontWeight: '600',
              }}
            />
            <div
              className='submit-section'
              style={{
                display: 'flex',
                marginTop: '30px',
                justifyContent: 'space-between',
              }}
            >
              <button
                className='submit-btn'
                type='submit'
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <img
                  src={require('../../assets/images/signInBtn.png')}
                  width={125}
                />
              </button>
              <div
                className='signup-offer'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Bitter',
                }}
              >
                <p style={{ margin: 0, paddingRight: '5px' }}>
                  {generatedForm.dontHaveAcc[0]}
                </p>
                <button
                  onClick={switchToSignUp}
                  style={{
                    margin: 0,
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#555555',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    padding: '0px',
                  }}
                >
                  {generatedForm.dontHaveAcc[1]}
                </button>
              </div>
            </div>
          </form>
          <div
            className='divider-bottom'
            style={{ display: 'flex', width: '90%', margin: '0 auto' }}
          >
            <img src={orDivider} width={'43%'} />
            <h3
              style={{
                fontFamily: 'Drum',
                color: '#444444',
                width: '14%',
                textAlign: 'center',
                fontSize: '25px',
                margin: '0px',
                paddingBottom: '12px',
              }}
            >
              {generatedForm.or}
            </h3>
            <img src={orDivider} width={'43%'} />
          </div>
          <div
            className='signin-with'
            style={{
              display: 'flex',
              width: '90%',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '25px',
            }}
          >
            <h4
              style={{
                fontFamily: 'Bitter',
                fontSize: '25px',
                color: '#444444',
                fontWeight: 100,
                margin: 0,
                alignSelf: 'center',
              }}
            >
              {generatedForm.signinWith}
            </h4>
            <div
              className='icons'
              style={{
                display: 'flex',
                width: '60%',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={googleIcon}
                width={120}
                height={50}
                style={{ marginRight: '20px', paddingTop: '4px' }}
              />
              <img
                src={twitterIcon}
                width={45}
                style={{ marginRight: '20px' }}
              />
              <img src={facebookIcon} width={45} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
