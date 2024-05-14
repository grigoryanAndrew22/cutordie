import { Fragment, useRef, useState } from 'react';
import { ChangePasswordStyles } from './ChangePasswordForm.styles';
import AnimatedButton from '../animated-button/AnimatedButton';
import leftTopCorner from '../../assets/images/leftTopCorner.png';
import leftBotCorner from '../../assets/images/leftBotCorner.png';
import rightTopCorner from '../../assets/images/rightTopCorner.png';
import rightBotCorner from '../../assets/images/rightBotCorner.png';

// const url ='https://cut-or-die-api.onrender.com/api/v1/users/resetPassword';
//  const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       email: email,
//       passwordResetToken: passwordResetToken,
//       password: newPassword,
//       passwordConfirm: passwordConfirm
//     })
//  };

//  try {
//     const response = await fetch(url, requestOptions);
//     if (!response.ok) {
//       throw new Error(HTTP error! status: ${response.status});
//     }
//     const data = await response.json();
//     console.log('Success:', data);
//  } catch (error) {
//     console.error('Error:', error);
//  }

export const CreateNewPass = (props: any) => {
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

  const [newPass, setNewPass] = useState('');
  const [newPassConfirm, setNewPassConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const passwordField: any = useRef(null);
  const passwordConfirmField: any = useRef(null);

  const password = passwordField?.current?.value;

  const hasNumber = password
    ?.split('')
    .some((el: any) =>
      ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(el)
    );

  const hasLetter = password
    ?.split('')
    .some((el: any) => alphabet.includes(el));

  const passChangeDone = (e: any) => {
    e.preventDefault();

    if (!(password === passwordConfirmField.current.value)) {
      setErrorMessage('Your passwords are different');
      return;
    }

    if (password === passwordConfirmField.current.value) {
      if (password.length < 6 || password.length > 22) {
        setErrorMessage('Your password must be 6-21 charecters long');
        return;
      } else if (!hasNumber) {
        setErrorMessage('Your password must contain at least one number');
        return;
      } else if (!hasLetter) {
        setErrorMessage('Your password must contain at least one letter');
        return;
      } else {
        passwordField.current.value = '';
        passwordConfirmField.current.value = '';
        setErrorMessage('');
        fetch(
          'https://cut-or-die-api.onrender.com/api/v1/users/resetPassword',
          {
            method: 'PATCH', // or 'POST', 'PUT', etc.
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: props.email,
              passwordResetToken: props.code,
              password: newPass,
              passwordConfirm: newPassConfirm,
            }),
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setNewPass('');
            setNewPassConfirm('');
            props.done();
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };

  const handlePass = (e: any) => {
    setNewPass(e.target.value);
  };
  const handlePassConfirm = (e: any) => {
    setNewPassConfirm(e.target.value);
  };

  return (
    <Fragment>
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
          <button style={{ cursor: 'pointer' }} onClick={props.arrow}>
            <img
              alt=''
              src={require('../../assets/images/arrowBack.png')}
              style={{
                position: 'absolute',
                left: '14px',
                top: '14px',
                width: '25px',
              }}
            />
          </button>
          <p
            style={{
              fontFamily: 'Drum',
              fontSize: '45px',
              color: '#444444',
              marginTop: '0.3em',
              marginBottom: '0.65em',
            }}
          >
            CREATE A NEW PASSWORD
          </p>

          <form
            className='signin-form'
            style={{ width: '90%' }}
            onSubmit={passChangeDone}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <label
                htmlFor='email'
                style={{
                  display: 'block',
                  fontFamily: 'Bitter',
                  fontSize: '22px',
                  paddingBottom: '9px',
                }}
              >
                Password:
              </label>
              <p
                style={{
                  paddingTop: '5px',
                  margin: 0,
                  color: '#900000',
                  fontFamily: 'Bitter',
                  fontWeight: 600,
                  fontSize: '14.5px',
                }}
              >
                {errorMessage}
              </p>
            </div>

            <input
              ref={passwordField}
              onChange={handlePass}
              className='email-input'
              // placeholder={generatedForm.email}
              type='password'
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
              // value={emailField}
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
                Confirm password:
              </label>
            </div>
            <input
              ref={passwordConfirmField}
              onChange={handlePassConfirm}
              className='password-input'
              type='password'
              // placeholder={generatedForm.password}
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
              // value={passwordField}
            />

            <div
              className='submit-section'
              style={{
                display: 'flex',
                marginTop: '28px',
                justifyContent: 'center',
                marginBottom: '25px',
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
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
