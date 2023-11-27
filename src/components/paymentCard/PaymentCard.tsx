import { Fragment } from 'react';
import { paymentCardStyles } from './PaymentCard.styles';
import leftTopCorner from '../../assets/images/leftTopCorner.png';
import leftBotCorner from '../../assets/images/leftBotCorner.png';
import rightBotCorner from '../../assets/images/rightBotCorner.png';
import rightTopCorner from '../../assets/images/rightTopCorner.png';
import orDivider from '../../assets/images/orDivider.svg';
import GooglePayBtn from '../footer/GooglePayBtn';

export const PaymentCard = (props: any) => {
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
          // display: props.visible ? 'block' : 'none',
          display: 'block',
        }}
      ></div>
      <div
        style={{
          width: '100%',
          height: '100%',
          // display: props.visible ? 'flex' : 'none',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          className='signin-wrapper'
          style={paymentCardStyles.paycardWrapper}
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
          <p
            style={{
              fontFamily: 'Drum',
              fontSize: '43px',
              color: '#373737',
              textAlign: 'center',
              marginTop: '20px',
            }}
          >
            CHOOSE YOUR PAYMENT METHOD
          </p>
          <div className='paywithBtn' style={{ display: 'flex' }}>
            <button
              style={{
                borderWidth: '2.5px',
                borderColor: 'black',
                cursor: 'pointer',
                borderRadius: '5px',
                borderStyle: 'solid',
                display: 'flex',
                height: '40px',
                width: '260px',
              }}
            >
              <img
                src={require('../../assets/images/bankCard.png')}
                width={30}
                style={{
                  alignSelf: 'center',
                  paddingLeft: '14px',
                  paddingRight: '24px',
                }}
              />
              <span
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Bitter',
                  fontSize: '20px',
                }}
              >
                Pay with a card
              </span>
            </button>
          </div>
          <div
            className='divider-bottom'
            style={{ display: 'flex', width: '90%', margin: '13px auto' }}
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
              OR
            </h3>
            <img src={orDivider} width={'43%'} />
          </div>
          <div className='googlePay' style={{ paddingBottom: '45px' }}>
            <GooglePayBtn />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
