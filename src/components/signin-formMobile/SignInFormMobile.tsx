import { signInFormMobileStyles } from './SignInFormMobile.styles';
import orDivider from '../../assets/images/orDivider.svg';
import googleIcon from '../../assets/images/googleIcon.png';
import twitterIcon from '../../assets/images/twitterIcon.png';
import facebookIcon from '../../assets/images/facebookIcon.png';
import leftTopCorner from '../../assets/images/leftTopCorner.png';
import leftBotCorner from '../../assets/images/leftBotCorner.png';
import rightTopCorner from '../../assets/images/rightTopCorner.png';
import rightBotCorner from '../../assets/images/rightBotCorner.png';
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

  // const switchToSignUp = (e: any) => {
  //   e.preventDefault();
  //   props.switch(false);
  //   props.switch(true);
  // };

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
          <img src={leftTopCorner} style={signInFormMobileStyles.leftTop} />
          <img src={rightTopCorner} style={signInFormMobileStyles.rightTop} />
          <img src={rightBotCorner} style={signInFormMobileStyles.rightBot} />
          <img src={leftBotCorner} style={signInFormMobileStyles.leftBot} />
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
              <label htmlFor='email' style={signInFormMobileStyles.emailLabel}>
                {generatedForm.email}:
              </label>
              <input
                className='email-input-mobile'
                placeholder={generatedForm.email}
                type='email'
                style={signInFormMobileStyles.emailInput}
              />
            </div>

            <div
              className='password-label'
              style={signInFormMobileStyles.passwordLabelWrap}
            >
              <label
                htmlFor='password'
                style={signInFormMobileStyles.passwordLabel}
              >
                {generatedForm.password}:
              </label>
              <input
                className='password-input-mobile'
                type='password'
                placeholder={generatedForm.password}
                style={signInFormMobileStyles.passwordInput}
              />
            </div>
            <div style={signInFormMobileStyles.signinBtnWrap}>
              <button
                className='submit-btn-mobile'
                type='submit'
                style={signInFormMobileStyles.signinBtn}
              >
                <img
                  alt=''
                  src={require('../../assets/images/signInBtn.png')}
                  width={125}
                />
              </button>
            </div>
            <div
              className='submit-section'
              style={signInFormMobileStyles.submitSectionWrap}
            >
              <div
                className='signup-offer'
                style={signInFormMobileStyles.signupOfferWrap}
              >
                <p style={signInFormMobileStyles.forgotPassword}>
                  {generatedForm.forgotPassword}
                </p>
                <p style={signInFormMobileStyles.donthaveAcc1}>
                  {generatedForm.dontHaveAcc[0]}
                </p>
                <button
                  onClick={props.switch2}
                  style={signInFormMobileStyles.donthaveAcc2}
                >
                  {generatedForm.dontHaveAcc[1]}
                </button>
              </div>
            </div>
          </form>
          <div
            className='divider-bottom'
            style={signInFormMobileStyles.dividerBot}
          >
            <img src={orDivider} width={'43%'} />
            <h3 style={signInFormMobileStyles.or}>{generatedForm.or}</h3>
            <img src={orDivider} width={'43%'} />
          </div>
          <div
            className='signin-with'
            style={signInFormMobileStyles.signinWithWrap}
          >
            <h4 style={signInFormMobileStyles.signinWith}>
              {generatedForm.signinWith}
            </h4>
            <div className='icons' style={signInFormMobileStyles.icons}>
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
