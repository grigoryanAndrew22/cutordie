import { Fragment, useState } from 'react';
import { ChangePasswordStyles } from './ChangePasswordForm.styles';
import './ChangePasswordForm.css';
import { CreateNewPass } from './CreateNewPass';

export const ChangePasswordForm = (props: any) => {
  const [createNewShown, setCreateNewShown] = useState(false);

  const nextStep = (e: any) => {
    e.preventDefault();
    props.hide();
    setCreateNewShown(true);
  };

  return (
    <Fragment>
      <CreateNewPass shown={createNewShown} />
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
              marginTop: '0.55em',
            }}
          >
            FORGOT A PASSWORD?
          </p>

          <p style={{ fontFamily: 'Bitter', color: '#444444', marginTop: 0 }}>
            Enter a six-digit verification code you received on email
          </p>
          <form onSubmit={nextStep}>
            <input
              type='text'
              className='emailCode-input'
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                height: '30px',
                fontFamily: 'Bitter',
                color: '#444444',
                fontSize: '16px',
                fontWeight: '600',
                width: '310px',
                marginTop: '10px',
                paddingLeft: '7px',
              }}
            />
          </form>
          <p
            style={{
              color: '#900000',
              fontWeight: '600',
              fontFamily: 'Bitter',
            }}
          >
            Wrong code, try again
          </p>
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
              style={{
                fontFamily: 'Bitter',
                color: '#555555',
                fontSize: '21px',
                fontWeight: '600',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                outline: 0,
                height: '30px',
              }}
            >
              Resend
            </button>
            <button
              style={{
                fontFamily: 'Bitter',
                color: '#555555',
                fontSize: '20px',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                outline: 0,
                height: '30px',
              }}
            >
              To the previous step
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
