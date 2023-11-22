import { signUpFormStyles } from './SignUpFormMobile.styles';
import orDivider from '../../assets/images/orDivider.svg';
import googleIcon from '../../assets/images/googleIcon.png';
import twitterIcon from '../../assets/images/twitterIcon.png';
import facebookIcon from '../../assets/images/facebookIcon.png';
import leftTopCorner from '../../assets/images/leftTopCorner.png';
import leftBotCorner from '../../assets/images/leftBotCorner.png';
import rightTopCorner from '../../assets/images/rightTopCorner.png';
import rightBotCorner from '../../assets/images/rightBotCorner.png';
import signUpBtn from '../../assets/images/signUpBtn.svg';
import './SignUpFormMobile.css';
import { Fragment, useState } from 'react';

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

export const SignUpFormMobile = (props: any) => {
  const closeForm = () => {
    props.switch(false);
  };

  // const switchBack = (e: any) => {
  //   e.preventDefault();
  //   props.switch(false);
  //   props.switchSignin(true);
  // };

  const signinBtn =
    props.language === 'en' ? require('../../assets/images/signInBtn.png') : signUpBtn;

  const generatedForm = props.language === 'en' ? formLangs.en : formLangs.ua;

  return (
    <Fragment>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: props.visible ? 'flex' : 'none',
          justifyContent: 'center',
        }}
      >
        <div className="signup-wrapper-mobile" style={signUpFormStyles.signinWrapper}>
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
          <div className="signin-title" style={signUpFormStyles.signInTitle}>
            <p style={{ display: 'inline', fontSize: '49px' }}>{generatedForm.title}</p>
            <button className="close" style={signUpFormStyles.closeButton} onClick={closeForm}>
              X
            </button>
          </div>
          <form className="signin-form" style={{ width: '90%' }}>
            <div
              className="name-surname-wrapper"
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
              }}
            >
              <div
                className="name"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <label
                  htmlFor="name"
                  style={{
                    fontFamily: 'Bitter',
                    fontSize: '19px',
                    color: '#444444',
                  }}
                >
                  {generatedForm.name}:
                </label>
                <input
                  placeholder={generatedForm.name}
                  type="text"
                  className="name-input-mobile"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: '30px',
                    fontFamily: 'Bitter',
                    color: '#444444',
                    fontSize: '16px',
                    fontWeight: '600',
                    width: '100%',
                  }}
                />
              </div>
              <div
                className="surname"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <label
                  htmlFor="surname"
                  style={{
                    fontFamily: 'Bitter',
                    fontSize: '19px',
                    color: '#444444',
                  }}
                >
                  {generatedForm.surname}:
                </label>
                <input
                  placeholder={generatedForm.surname}
                  type="text"
                  className="surname-input-mobile"
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
                />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontFamily: 'Bitter',
                  fontSize: '19px',
                  color: '#444444',
                }}
              >
                {generatedForm.email}:
              </label>

              <input
                className="email-input-mobile"
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
                  paddingLeft: '12px',
                }}
              />
            </div>

            <div
              className="password-label"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <label
                htmlFor="password"
                style={{
                  fontFamily: 'Bitter',
                  fontSize: '19px',
                  color: '#444444',
                }}
              >
                {generatedForm.password}:
              </label>
              <input
                className="password-input-mobile"
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
                  paddingLeft: '7px',
                }}
              />
            </div>
            <div
              className="submit-section"
              style={{
                display: 'flex',
                marginTop: '30px',
                justifyContent: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                  <img src={signUpBtn} width={130} style={{ marginTop: '-18px' }} />
                </button>
                <div
                  className="signup-offer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Bitter',
                    marginTop: '20px',
                    marginBottom: '7px',
                  }}
                >
                  <p style={{ margin: 0, paddingRight: '6px' }}>{generatedForm.dontHaveAcc[0]}</p>
                  <button
                    onClick={props.switchBack}
                    style={{
                      margin: 0,
                      fontSize: '22px',
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
            </div>
          </form>
          <div
            className="divider-bottom"
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
            className="signin-with"
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
                fontSize: '19px',
                color: '#444444',
                fontWeight: 100,
                margin: 0,
                alignSelf: 'center',
              }}
            >
              {generatedForm.signupWith}
            </h4>
            <div
              className="icons"
              style={{
                display: 'flex',
                width: '60%',
                justifyContent: 'space-between',
              }}
            >
              <img
                src={googleIcon}
                width={100}
                height={50}
                style={{ marginRight: '20px', paddingTop: '4px' }}
              />
              <img src={twitterIcon} width={35} style={{ marginRight: '20px' }} />
              <img src={facebookIcon} width={35} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
