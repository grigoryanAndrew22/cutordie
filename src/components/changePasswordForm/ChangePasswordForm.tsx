import { Fragment, useState } from 'react';
import { ChangePasswordStyles } from './ChangePasswordForm.styles';
import './ChangePasswordForm.css';
import { CreateNewPass } from './CreateNewPass';
import leftTopCorner from '../../assets/images/leftTopCorner.png';
import leftBotCorner from '../../assets/images/leftBotCorner.png';
import rightTopCorner from '../../assets/images/rightTopCorner.png';
import rightBotCorner from '../../assets/images/rightBotCorner.png';
import AnimatedButton from '../animated-button/AnimatedButton';

export const ChangePasswordForm = (props: any) => {
  const [createNewShown, setCreateNewShown] = useState(false);
  const [emailCode, setEmailCode] = useState('');

  const hideSecondWindow = () => {
    setCreateNewShown(false);
  };

  const nextStep = (e: any) => {
    e.preventDefault();
    props.hide();
    setCreateNewShown(true);
  };

  const back = (e: any) => {
    e.preventDefault();
    props.hide();
  };

  const prev = (e: any) => {
    e.preventDefault();
    props.prevStep();
    setCreateNewShown(false);
  };

  const handleCode = (e: any) => {
    setEmailCode(e.target.value);
  };

  return (
    <Fragment>
      <CreateNewPass
        shown={createNewShown}
        arrow={prev}
        code={emailCode}
        email={props.email}
        done={hideSecondWindow}
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
              marginTop: '0.55em',
            }}
          >
            CHANGE A PASSWORD?
          </p>

          <p style={{ fontFamily: 'Bitter', color: '#444444', marginTop: 0 }}>
            Enter a six-digit verification code you received on email
          </p>
          <form onSubmit={nextStep} style={{ marginBottom: '3.15em' }}>
            <input
              onChange={handleCode}
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

          {/* <p
            style={{
              color: '#900000',
              fontWeight: '600',
              fontFamily: 'Bitter',
            }}
          >
            Wrong code, try again
          </p> */}
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
                textClass={'button4'}
              />
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </Fragment>
  );
};
