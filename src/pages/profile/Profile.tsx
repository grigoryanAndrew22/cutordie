import { Fragment } from 'react';
import pencil from '../../assets/images/pencil.png';
import coinGray from '../../assets/images/coinGray.png';
import hryvniaGray from '../../assets/images/hryvniaGray.png';
import euroGray from '../../assets/images/euroGray.png';
import dollarGray from '../../assets/images/dollarGray.png';
import langIconGray from '../../assets/images/langIconGray.png';
import logoutGray from '../../assets/images/logoutGray.png';
import './Profile.css';
import { MovieCard } from '../../components/movie-card/MovieCard';
import { PaymentCard } from '../../components/paymentCard/PaymentCard';

export const Profile = (props: any) => {
  const changeCurrencyUAH = () => {
    props.changeCurr('uah');
  };
  const changeCurrencyUSD = () => {
    props.changeCurr('usd');
  };
  const changeCurrencyEUR = () => {
    props.changeCurr('eur');
  };

  console.log(props.user.userName);

  return (
    <Fragment>
      <PaymentCard />
      <div
        className='prof-sett-wrapper'
        style={{ height: '976px', boxShadow: 'black 0px 110px 120px' }}
      >
        <div
          style={{
            paddingTop: '150px',
            display: 'flex',
            width: '80%',
            margin: 'auto',
            justifyContent: 'space-between',
          }}
        >
          <div className='myprofile' style={{ width: '37%' }}>
            <p
              className='prof-title'
              style={{
                margin: 0,
                color: '#444444',
                fontSize: '83px',
                fontFamily: 'Drum',
                whiteSpace: 'nowrap',
              }}
            >
              MY PROFILE
            </p>

            <div className='prof-info' style={{ marginTop: '45px' }}>
              <div
                className='name_surname'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '25px',
                  flexDirection: 'column',
                }}
              >
                <div className='name'>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      paddingBottom: '7px',
                    }}
                  >
                    <img alt='' src={pencil} width={29} height={33} />
                    <label
                      htmlFor='name'
                      style={{
                        fontFamily: 'Bitter',
                        fontSize: '25px',
                        paddingLeft: '5px',
                      }}
                    >
                      Name:
                    </label>
                  </div>
                </div>
                <input
                  className='email-input'
                  value={props.user.userName}
                  type='email'
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: '39px',
                    fontFamily: 'Bitter',
                    color: '#444444',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: '7px',
                    marginTop: '25px',
                  }}
                >
                  <img alt='' src={pencil} width={29} height={33} />
                  <label
                    htmlFor='email'
                    style={{
                      fontFamily: 'Bitter',
                      fontSize: '22px',
                    }}
                  >
                    Email:
                  </label>
                </div>
                <input
                  className='email-input'
                  value={props.user.email}
                  type='email'
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: '39px',
                    fontFamily: 'Bitter',
                    color: '#444444',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                />
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingBottom: '7px',
                    marginTop: '25px',
                  }}
                >
                  <img alt='' src={pencil} width={29} height={33} />
                  <label
                    htmlFor='email'
                    style={{
                      fontFamily: 'Bitter',
                      fontSize: '22px',
                    }}
                  >
                    Password:
                  </label>
                </div>
                <input
                  className='password-input'
                  value={'password123'}
                  type='password'
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: '39px',
                    fontFamily: 'Bitter',
                    color: '#444444',
                    fontSize: '16px',
                    fontWeight: '600',
                  }}
                />
              </div>
            </div>
          </div>
          <div className='settings'>
            <p
              className='sett-title'
              style={{
                margin: 0,
                color: 'rgb(68, 68, 68)',
                fontSize: '83px',
                fontFamily: 'Drum',
              }}
            >
              SETTINGS
            </p>
            <div
              className='currency-section'
              style={{ display: 'flex', marginTop: '83px' }}
            >
              <div
                style={{
                  width: '39%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <img alt='' src={coinGray} width={55} />
              </div>
              <div
                style={{
                  width: '61%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <img
                  alt=''
                  src={require('../../assets/images/circle1.png')}
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: -15,
                    width: 62,
                    display: props.currency === 'uah' ? 'inline-block' : 'none',
                  }}
                />
                <img
                  alt=''
                  src={require('../../assets/images/circle1.png')}
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: 64,
                    width: 62,
                    display: props.currency === 'eur' ? 'inline-block' : 'none',
                  }}
                />
                <img
                  alt=''
                  src={require('../../assets/images/circle1.png')}
                  style={{
                    position: 'absolute',
                    top: -13,
                    right: -15,
                    width: 62,
                    display: props.currency === 'usd' ? 'inline-block' : 'none',
                  }}
                />
                <button
                  onClick={changeCurrencyUAH}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                    zIndex: 10,
                  }}
                >
                  <img alt='' width={32} src={hryvniaGray} />
                </button>
                <button
                  onClick={changeCurrencyEUR}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                    zIndex: 10,
                  }}
                >
                  <img alt='' width={44} src={euroGray} />
                </button>
                <button
                  onClick={changeCurrencyUSD}
                  style={{
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: '30px',
                    zIndex: 10,
                  }}
                >
                  <img alt='' width={32} src={dollarGray} />
                </button>
              </div>
            </div>
            <div
              className='language-section'
              style={{ display: 'flex', width: '98%', marginTop: '30px' }}
            >
              <div style={{ width: '39%', display: 'flex' }}>
                <img alt='' src={langIconGray} width={53} height={53} />
              </div>
              <div
                style={{
                  width: '61%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  position: 'relative',
                }}
              >
                <img
                  alt=''
                  src={require('../../assets/images/circle2.png')}
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: -15,
                    width: 92,
                    display: props.language === 'ua' ? 'inline-block' : 'none',
                  }}
                />
                <img
                  alt=''
                  src={require('../../assets/images/circle2.png')}
                  style={{
                    position: 'absolute',
                    top: -13,
                    right: -15,
                    width: 92,
                    display: props.language === 'en' ? 'inline-block' : 'none',
                  }}
                />
                <button
                  onClick={() => {
                    props.changeLangHandler('ua');
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Bitter',
                    fontSize: '42px',
                    color: '#505050',
                    zIndex: 10,
                  }}
                >
                  UA
                </button>
                <button
                  onClick={() => {
                    props.changeLangHandler('en');
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Bitter',
                    fontSize: '42px',
                    color: '#505050',
                    zIndex: 10,
                  }}
                >
                  EN
                </button>
              </div>
            </div>
            <div
              className='logout-section'
              style={{
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img alt='' src={logoutGray} width={50} />
              <div style={{ paddingLeft: '70px' }}>
                <button
                  style={{
                    border: 'none',
                    background: 'transparent',
                    color: '#505050',
                    cursor: 'pointer',
                    fontFamily: 'Bitter',
                    fontSize: '30px',
                    fontWeight: '600',
                  }}
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=''
          src={require('../../assets/images/blot-profile.png')}
          style={{ marginTop: '44px' }}
        />
      </div>

      <div className='purchasedCourses' style={{ marginBottom: '100px' }}>
        <div>
          <p
            style={{
              margin: 0,
              color: '#D4D4D4',
              fontSize: '83px',
              fontFamily: 'Drum',
              textAlign: 'center',
              paddingTop: '40px',
            }}
          >
            PURCHASED COURSES
          </p>
        </div>

        <div
          className='cards'
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            // gap: '3rem',
            justifyContent: 'space-between',
            width: '80%',
            margin: 'auto',
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((el: any, i: number) => (
            <MovieCard
              key={i}
              index={i}
              course={{
                price: '99',
                name: 'Course 1',
                duration: '3',
                description:
                  'Artistic Elements in Haircutting: Discover the artistic side of haircutting and learn how to integrate visual elements, such as line, shape, and form, into your designs...',
              }}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
