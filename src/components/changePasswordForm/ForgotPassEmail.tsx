import { Fragment, useRef, useState } from 'react';
import './ChangePasswordForm.css';
import AnimatedButton from '../animated-button/AnimatedButton';
import { ChangePasswordStyles } from './ChangePasswordForm.styles';
import { CreateNewPass } from './CreateNewPass';
import leftTopCorner from '../../assets/images/leftTopCorner.png';
import leftBotCorner from '../../assets/images/leftBotCorner.png';
import rightTopCorner from '../../assets/images/rightTopCorner.png';
import rightBotCorner from '../../assets/images/rightBotCorner.png';
import { ChangePasswordForm } from './ChangePasswordForm';

export const ForgotPassEmail = (props: any) => {
  const [forgotPassShow, setForgotPassShown] = useState(false);
  const [emailCode, setEmailCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');

  const emailInput: any = useRef(null);

  const hideSecondWindow = () => {
    setForgotPassShown(false);
  };

  const showSecondWindow = () => {
    setForgotPassShown(true);
  };
  console.log(email);

  const nextStep = (e: any) => {
    e.preventDefault();

    fetch('https://cut-or-die-api.onrender.com/api/v1/users/forgotPassword', {
      method: 'POST', // or 'POST', 'PUT', etc.
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'error') {
          setErrorMessage('Incorrect email');
          return;
        } else {
          props.closeEmailForm();
          emailInput.current.value = '';
          setForgotPassShown(true);
          setEmail('');
        }
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });

    // props.hide();
  };

  const back = (e: any) => {
    e.preventDefault();
    setErrorMessage('');
    props.closeEmailForm();
  };

  const prev = (e: any) => {
    e.preventDefault();
    props.prevStep();
    setForgotPassShown(false);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  return (
    <Fragment>
      <ChangePasswordForm
        shown={forgotPassShow}
        arrow={prev}
        code={emailCode}
        email={email}
        done={hideSecondWindow}
        hide={hideSecondWindow}
        prevStep={showSecondWindow}
        showFirstWindow={props.showEmailForm}
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
          display: props.shown ? 'block' : 'none',
        }}
      ></div>
      <div
        style={{
          width: '100%',
          height: '100%',
          display: props.shown ? 'flex' : 'none',
          justifyContent: 'center',
        }}
      >
        <div
          className='changePass-wrapper'
          style={ChangePasswordStyles.wrapper}
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
          <button style={{ cursor: 'pointer' }} onClick={back}>
            <img
              alt=''
              src={require('../../assets/images/arrowBack.png')}
              style={{
                position: 'absolute',
                left: '22px',
                top: '20px',
                width: '25px',
              }}
            />
          </button>
          <p
            style={{
              fontFamily: 'Drum',
              fontSize: '45px',
              color: '#444444',
              marginTop: '0.35em',
              marginBottom: '25px',
            }}
          >
            FORGOT A PASSWORD?
          </p>

          <p
            style={{
              fontFamily: 'Bitter',
              color: '#444444',
              marginTop: 0,
              fontSize: '20px',
            }}
          >
            Enter an email to receive a verification code
          </p>
          <form onSubmit={nextStep} style={{ marginBottom: '3.15em' }}>
            <p
              style={{
                margin: 0,
                color: '#900000',
                fontFamily: 'Bitter',
                fontSize: '15px',
                fontWeight: '600',
                paddingLeft: '5px',
              }}
            >
              {errorMessage}
            </p>
            <input
              ref={emailInput}
              onChange={handleEmail}
              type='email'
              placeholder='Email'
              className='passEmailInput'
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                height: '40px',
                fontFamily: 'Bitter',
                color: '#444444',
                fontSize: '16px',
                fontWeight: '600',
                width: '430px',
                marginTop: '3px',
                paddingLeft: '7px',
                marginRight: '-6px',
              }}
            />
          </form>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '79%',
              marginBottom: '40px',
              alignItems: 'center',
            }}
          >
            <button
              className='submit-btn'
              // type='submit'
              onClick={nextStep}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {/* <img src={require('../../assets/images/signInBtn.png')} width={125} /> */}
              <AnimatedButton
                url={''}
                buttonType={'submitsignin'}
                text={'CONTINUE'}
                width={115}
                height={67}
                top={51}
                left={46}
                color={'363636'}
                font={'Besom'}
                textClass={'button5'}
              />
            </button>
            <button
              onClick={props.closeEmailForm}
              style={{
                fontFamily: 'Bitter',
                color: '#4A4949',
                fontSize: '21px',
                fontWeight: '300',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                outline: 0,
                height: '30px',
              }}
            >
              To main page
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </Fragment>
  );
};
