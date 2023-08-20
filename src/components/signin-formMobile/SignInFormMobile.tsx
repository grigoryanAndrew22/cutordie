import { signInFormMobileStyles } from './SignInFormMobile.styles';
import orDivider from '../../assets/images/orDivider.svg';
import googleIcon from '../../assets/images/googleIcon.svg';
import twitterIcon from '../../assets/images/twitterIcon.svg';
import facebookIcon from '../../assets/images/facebookIcon.svg';
import leftTopCorner from '../../assets/images/leftTopCorner.svg';
import leftBotCorner from '../../assets/images/leftBotCorner.svg';
import rightTopCorner from '../../assets/images/rightTopCorner.svg';
import rightBotCorner from '../../assets/images/rightBotCorner.svg';
import signInBtnUA from '../../assets/images/button3UA.svg';
import './SignInFormMobile.css';
import { Fragment } from 'react';
import { SignUpFormMobile } from '../signupFormMobile/SignUpFormMobile';

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
    title: 'УВIЙТИ',
    email: 'Пошта',
    password: 'Пароль',
    forgotPassword: 'Забули пароль?',
    dontHaveAcc: ['Не маєте аккаунту?', 'Реєстрація'],
    or: 'АБО',
    signinWith: 'Увійти через:',
  },
};

export const SignInFormMobile = (props: any) => {
  const closeForm = () => {
    props.switch(false);
  };

  const signinBtn =
    props.language === 'en'
      ? require('../../assets/images/signInBtn.png')
      : signInBtnUA;

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
        <div
          className='signin-wrapper-mobile'
          style={signInFormMobileStyles.signinWrapper}
        >
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
          <div
            className='signin-title'
            style={signInFormMobileStyles.signInTitle}
          >
            <p style={{ display: 'inline', fontSize: '49px' }}>
              {generatedForm.title}
            </p>
            <button
              className='close'
              style={signInFormMobileStyles.closeButton}
              onClick={closeForm}
            >
              X
            </button>
          </div>
          <form className='signin-form' style={{ width: '94%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <label
                htmlFor='email'
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
                className='email-input-mobile'
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
                  marginLeft: '3px',
                }}
              />
            </div>

            <div
              className='password-label'
              style={{
                display: 'flex',
                marginTop: '20px',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <label
                htmlFor='password'
                style={{
                  fontFamily: 'Bitter',
                  fontSize: '18px',
                  color: '#444444',
                }}
              >
                {generatedForm.password}:
              </label>
              <input
                className='password-input-mobile'
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
                  marginLeft: '5px',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'center',
                marginTop: '45px',
              }}
            >
              <button
                className='submit-btn-mobile'
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
            </div>
            <div
              className='submit-section'
              style={{
                display: 'flex',
                marginTop: '30px',
                justifyContent: 'center',
              }}
            >
              <div
                className='signup-offer'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Bitter',
                  marginLeft: '1px',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'Bitter',
                    whiteSpace: 'nowrap',
                    alignSelf: 'center',
                    fontSize: '16px',
                    paddingRight: '9px',
                    color: '#6d6d6d',
                  }}
                >
                  {generatedForm.forgotPassword}
                </p>
                <p
                  style={{
                    margin: 0,
                    paddingRight: '10px',
                    whiteSpace: 'nowrap',
                    fontSize: '11px',
                    color: '#6d6d6d',
                  }}
                >
                  {generatedForm.dontHaveAcc[0]}
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#555555',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {generatedForm.dontHaveAcc[1]}
                </p>
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
                paddingBottom: '13px',
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
                fontSize: '19px',
                color: '#444444',
                fontWeight: 100,
                margin: 0,
                alignSelf: 'center',
                width: '37%',
              }}
            >
              {generatedForm.signinWith}
            </h4>
            <div
              className='icons'
              style={{
                display: 'flex',
                width: '63%',
                justifyContent: 'space-around',
              }}
            >
              <img
                src={googleIcon}
                width={100}
                height={50}
                style={{ paddingTop: '4px' }}
              />
              <img src={twitterIcon} width={40} style={{ margin: '0px 6px' }} />
              <img src={facebookIcon} width={40} />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
