import { Fragment } from 'react';
import { ChangePasswordStyles } from './ChangePasswordForm.styles';
import AnimatedButton from '../animated-button/AnimatedButton';

export const CreateNewPass = (props: any) => {
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
            // onSubmit={login}
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
              Password:
            </label>

            <input
              // ref={emailField}
              // onChange={emailChange}
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
              // ref={passwordField}
              // onChange={passwordChange}
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
                  textClass={'button4'}
                />
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
