import { signUpFormStyles } from './SignUpForm.styles';
import orDivider from '../../assets/images/orDivider.svg';
import googleIcon from '../../assets/images/googleIcon.png';
import leftTopCorner from '../../assets/images/leftTopCorner.png';
import leftBotCorner from '../../assets/images/leftBotCorner.png';
import rightTopCorner from '../../assets/images/rightTopCorner.png';
import rightBotCorner from '../../assets/images/rightBotCorner.png';
import signUpBtn from '../../assets/images/signUpBtn.svg';
import './SignUpForm.css';
import { Fragment, useRef, useState } from 'react';
import { SignUpFormMobile } from '../signupFormMobile/SignUpFormMobile';
import Cookies from 'js-cookie';

const formLangs = {
  en: {
    title: 'SIGN UP',
    name: 'Name',
    surname: 'Surname',
    email: 'Email',
    password: 'Password',
    forgotPassword: 'Forgot password?',
    dontHaveAcc: ['Have an account?', 'Sign in'],
    or: 'OR',
    signupWith: 'Register with:',
  },
  ua: {
    title: 'РЕЄСТРАЦІЯ',
    name: 'Iм`я',
    surname: 'Прiзвище',
    email: 'Пошта',
    password: 'Пароль',
    forgotPassword: 'Забули пароль?',
    dontHaveAcc: ['Маєте аккаунт?', 'Увiйти'],
    or: 'АБО',
    signupWith: 'Увійти через:',
  },
};

export const SignUpForm = (props: any) => {
  const [inputName, setInputName] = useState('');
  const [inputSurname, setInputSurname] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const nameField: any = useRef(null);
  const surnameField: any = useRef(null);
  const emailField: any = useRef(null);
  const passwordField: any = useRef(null);

  const handleName = (e: any) => {
    setInputName(e.target.value);
  };
  const handleSurname = (e: any) => {
    setInputSurname(e.target.value);
  };
  const handleEmail = (e: any) => {
    setInputEmail(e.target.value);
  };
  const handlePassword = (e: any) => {
    setInputPassword(e.target.value);
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    closeForm();
    nameField.current.value = '';
    emailField.current.value = '';
    passwordField.current.value = '';

    // axios
    //   .post('https://cut-or-die-api.onrender.com/api/v1/users/signup', {
    //     userName: inputName + inputSurname,
    //     email: inputEmail,
    //     password: inputPassword,
    //     passwordConfirm: inputPassword,
    //   })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    fetch('https://cut-or-die-api.onrender.com/api/v1/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: inputName,
        email: inputEmail,
        password: inputPassword,
        passwordConfirm: inputPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        Cookies.set('jwt', data.token, { secure: true });
        props.setLoggedIn(true);
        props.setUser(data.data.user);
        console.log(data);
      })
      .catch((error) => console.log(error));

    ///////

    // fetch('https://cut-or-die-api.onrender.com/api/v1/users/currentUser', {
    //   method: 'POST',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },

    //   body: JSON.stringify({ jwt: Cookies.get('jwt') }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     if (data.status === 'fail') {
    //       props.setLoggedIn(false);
    //     } else {
    //       props.setLoggedIn(true);
    //     }
    //     props.setUser(data.data.user);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const closeForm = () => {
    props.switch(false);
  };

  const switchBack = (e: any) => {
    e.preventDefault();
    props.switch(false);
    props.switchSignin(true);
  };

  // const signinBtn =
  //   props.language === 'en' ? require('../../assets/images/signInBtn.png') : signUpBtn;

  const generatedForm = props.language === 'en' ? formLangs.en : formLangs.ua;

  return (
    <Fragment>
      <SignUpFormMobile
        visible={props.visible}
        switch={props.switch}
        switchSignin={props.switch}
        language={props.language}
        switchBack={switchBack}
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
          display: props.visible ? 'block' : 'none',
        }}
      ></div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: props.visible ? 'flex' : 'none',
          justifyContent: 'center',
        }}
      >
        <div
          className='signin-wrapper signupwr'
          style={signUpFormStyles.signinWrapper}
        >
          <img
            alt=''
            src={leftTopCorner}
            style={{
              position: 'absolute',
              left: '-4px',
              top: '-4px',
              width: '42px',
            }}
          />
          <img
            alt=''
            src={rightTopCorner}
            style={{
              position: 'absolute',
              right: '-4px',
              top: '-4px',
              width: '42px',
            }}
          />
          <img
            alt=''
            src={rightBotCorner}
            style={{
              position: 'absolute',
              right: '-4px',
              bottom: '-4px',
              width: '42px',
            }}
          />
          <img
            alt=''
            src={leftBotCorner}
            style={{
              position: 'absolute',
              left: '-4px',
              bottom: '-4px',
              width: '42px',
            }}
          />
          <div className='signin-title' style={signUpFormStyles.signInTitle}>
            <p style={{ display: 'inline', fontSize: '49px' }}>
              {generatedForm.title}
            </p>
            <button
              className='close'
              style={signUpFormStyles.closeButton}
              onClick={closeForm}
            >
              X
            </button>
          </div>
          <form
            className='signin-form'
            style={{ width: '90%' }}
            onSubmit={submitForm}
          >
            <div
              className='name-surname-wrapper'
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '15px',
              }}
            >
              <div className='name' style={{ width: '100%' }}>
                <label
                  htmlFor='name'
                  style={{
                    fontFamily: 'Bitter',
                    fontSize: '22px',
                    paddingBottom: '9px',
                  }}
                >
                  {generatedForm.name}:
                </label>
                <input
                  placeholder={generatedForm.name}
                  type='text'
                  className='name-input'
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: '30px',
                    fontFamily: 'Bitter',
                    color: '#444444',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%',
                    marginTop: '10px',
                  }}
                  onChange={handleName}
                  ref={nameField}
                />
              </div>
              {/* <div className='surname' style={{ width: '46%' }}>
                <label
                  htmlFor='surname'
                  style={{
                    fontFamily: 'Bitter',
                    fontSize: '22px',
                    paddingBottom: '9px',
                  }}
                >
                  {generatedForm.surname}
                </label>
                <input
                  placeholder={generatedForm.surname}
                  type='text'
                  className='surname-input'
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: '30px',
                    fontFamily: 'Bitter',
                    color: '#444444',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '98%',
                  }}
                  onChange={handleSurname}
                  ref={surnameField}
                />
              </div> */}
            </div>
            <label
              htmlFor='email'
              style={{
                display: 'block',
                fontFamily: 'Bitter',
                fontSize: '22px',
                paddingBottom: '9px',
              }}
            >
              {generatedForm.email}:
            </label>

            <input
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
              onChange={handleEmail}
              ref={emailField}
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
                {generatedForm.password}:
              </label>
            </div>
            <input
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
              onChange={handlePassword}
              ref={passwordField}
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
                  alt=''
                  src={signUpBtn}
                  width={130}
                  style={{ marginTop: '-18px' }}
                />
              </button>
              <div
                className='signup-offer'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Bitter',
                  gap: '15px',
                }}
              >
                <p style={{ margin: 0, paddingRight: '6px' }}>
                  {generatedForm.dontHaveAcc[0]}
                </p>
                <button
                  onClick={switchBack}
                  style={{
                    margin: 0,
                    fontSize: '24px',
                    fontWeight: 600,
                    color: '#555555',
                    fontFamily: 'inherit',
                    background: 'transparent',
                    cursor: 'pointer',
                    border: 'none',
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
            <img alt='' src={orDivider} width={'43%'} />
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
            <img alt='' src={orDivider} width={'43%'} />
          </div>
          <div
            className='signin-with'
            style={{
              display: 'flex',
              width: '90%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginBottom: '25px',
              gap: '40px',
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
              {generatedForm.signupWith}
            </h4>
            <img
              alt=''
              src={googleIcon}
              height={45}
              style={{ paddingTop: '4px' }}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
