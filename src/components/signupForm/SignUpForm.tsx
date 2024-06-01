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
import { log } from 'console';
import GoogleAuthBtn from '../google-auth-button/Google-auth-button';

const formLangs = {
  en: {
    title: 'SIGN UP',
    name: 'Name',
    surname: 'Surname',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
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
    confirmPassword: 'Підтвердіть пароль',
    forgotPassword: 'Забули пароль?',
    dontHaveAcc: ['Маєте аккаунт?', 'Увiйти'],
    or: 'АБО',
    signupWith: 'Увійти через:',
  },
};

const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

export const SignUpForm = (props: any) => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputConfirmPassword, setInputConfirmPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const nameField: any = useRef(null);
  const emailField: any = useRef(null);
  const passwordField: any = useRef(null);
  const confirmPasswordField: any = useRef(null);

  const hasNumber = inputPassword
    ?.split('')
    .some((el: any) =>
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(el)
    );

  const hasLetter = inputPassword
    ?.split('')
    .some((el: any) => alphabet.includes(el));

  const handleName = (e: any) => {
    setInputName(e.target.value);
  };

  const handleEmail = (e: any) => {
    setInputEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setInputPassword(e.target.value);
  };

  const handleConfirmPassword = (e: any) => {
    setInputConfirmPass(e.target.value);
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    console.log(inputPassword, inputConfirmPassword);


    if (!(inputPassword === inputConfirmPassword)) {
      setErrorMessage('Your passwords are different');
      return;
    }

    if (inputPassword === inputConfirmPassword) {
      if (inputPassword.length < 6 || inputPassword.length > 22) {
        setErrorMessage('Your password must be 6-21 charecters long');
        return;
      } else if (!hasNumber) {
        setErrorMessage('Your password must contain at least one number');
        return;
      } else if (!hasLetter) {
        setErrorMessage('Your password must contain at least one letter');
        return;
      } else {
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
            console.log("DATA", data);
            Cookies.set('jwt', data.token, { secure: true });
            props.setLoggedIn(true);
            props.setUser(data.data.user);
            nameField.current.value = '';
            emailField.current.value = '';
            passwordField.current.value = '';
            confirmPasswordField.current.value = '';
            closeForm();
          })
          .catch((error) => console.log(error));
      }
    }
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
        className="overlay"
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
        <div className="signin-wrapper signupwr" style={signUpFormStyles.signinWrapper}>
          <img
            alt=""
            src={leftTopCorner}
            style={{
              position: 'absolute',
              left: '-4px',
              top: '-4px',
              width: '42px',
            }}
          />
          <img
            alt=""
            src={rightTopCorner}
            style={{
              position: 'absolute',
              right: '-4px',
              top: '-4px',
              width: '42px',
            }}
          />
          <img
            alt=""
            src={rightBotCorner}
            style={{
              position: 'absolute',
              right: '-4px',
              bottom: '-4px',
              width: '42px',
            }}
          />
          <img
            alt=""
            src={leftBotCorner}
            style={{
              position: 'absolute',
              left: '-4px',
              bottom: '-4px',
              width: '42px',
            }}
          />
          <div className="signin-title" style={signUpFormStyles.signInTitle}>
            <p style={{ display: 'inline', fontSize: '49px' }}>{generatedForm.title}</p>
            <button className="close" style={signUpFormStyles.closeButton} onClick={closeForm}>
              X
            </button>
          </div>
          <form className="signin-form" style={{ width: '90%' }} onSubmit={submitForm}>
            <div
              className="name-surname-wrapper"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: '15px',
              }}
            >
              <div className="name" style={{ width: '100%' }}>
                <label
                  htmlFor="name"
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
                  type="text"
                  className="name-input"
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
            </div>
            <label
              htmlFor="email"
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
              className="email-input"
              placeholder={generatedForm.email}
              type="email"
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

            {/* password */}
            <div
              className="password-label"
              style={{
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-between',
              }}
            >
              <label
                htmlFor="password"
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
              className="password-input"
              type="password"
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

            {/* confirm password */}
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
                {generatedForm.confirmPassword}:
              </label>
            </div>
            <input
              className='password-input'
              type='password'
              placeholder={generatedForm.confirmPassword}
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
              onChange={handleConfirmPassword}
              ref={confirmPasswordField}
            />
            <div style={{ marginTop: '0.8em', height: '16.8px' }}>
              <p
                style={{
                  fontFamily: 'Bitter',
                  color: '#900000',
                  fontWeight: '600',
                  fontSize: '14px',
                  paddingLeft: '0.29em',
                  margin: 0,
                  display: 'block',
                }}
              >
                {errorMessage}
              </p>
            </div>

            <div
              className="submit-section"
              style={{
                display: 'flex',
                marginTop: '15px',
                justifyContent: 'space-between',
              }}
            >
              <button
                className="submit-btn"
                type="submit"
                style={{
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                <img alt="" src={signUpBtn} width={130} style={{ marginTop: '-18px' }} />
              </button>
              <div
                className="signup-offer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Bitter',
                  gap: '15px',
                }}
              >
                <p style={{ margin: 0, paddingRight: '6px' }}>{generatedForm.dontHaveAcc[0]}</p>
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
            className="divider-bottom"
            style={{ display: 'flex', width: '90%', margin: '0 auto' }}
          >
            <img alt="" src={orDivider} width={'43%'} />
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
            <img alt="" src={orDivider} width={'43%'} />
          </div>
          <div
            className="signin-with"
            style={{
              display: 'flex',
              width: '90%',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginBottom: '25px',
              gap: '40px',
            }}
          >
            <GoogleAuthBtn />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
