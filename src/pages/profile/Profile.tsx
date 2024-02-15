import { Fragment, useEffect, useState } from 'react';
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
import { profileStyles } from './Profile.styles';

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

  const [coursesObj, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://cut-or-die-api.onrender.com/api/v1/courses/')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.data.courses);
        console.log(data.data.courses);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Fragment>
      <PaymentCard />
      <div
        className='prof-sett-wrapper'
        style={{ boxShadow: 'black 0px 110px 120px' }}
      >
        <div className='wrapperChild' style={profileStyles.wrapperChild}>
          <div className='myprofile' style={{ width: '37%' }}>
            <p className='prof-title' style={profileStyles.profileTitle}>
              MY PROFILE
            </p>

            <div className='prof-info' style={{ marginTop: '45px' }}>
              <div className='name_surname' style={profileStyles.nameSurname}>
                <div className='name'>
                  <div style={profileStyles.nameWrap}>
                    <img alt='' src={pencil} width={29} height={33} />
                    <label htmlFor='name' style={profileStyles.nameLabel}>
                      Name:
                    </label>
                  </div>
                </div>
                <input
                  className='email-input profile-input'
                  value={props.user.userName}
                  type='email'
                  style={profileStyles.input}
                />

                <div style={profileStyles.emailWrap}>
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
                  className='email-input profile-input'
                  value={props.user.email}
                  type='email'
                  style={profileStyles.input}
                />
                <div style={profileStyles.emailWrap}>
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
                  className='password-input profile-input'
                  value={'password123'}
                  type='password'
                  style={profileStyles.input}
                />
              </div>
            </div>
          </div>
          <div className='settings prof-setts'>
            <p className='sett-title' style={profileStyles.settTitle}>
              SETTINGS
            </p>
            <div
              className='currency-section'
              style={{ display: 'flex', marginTop: '83px' }}
            >
              <div style={profileStyles.coinWrap}>
                <img alt='' src={coinGray} width={55} />
              </div>
              <div style={profileStyles.currencyWrap}>
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
                  style={profileStyles.currBtn}
                >
                  <img alt='' width={32} src={hryvniaGray} />
                </button>
                <button
                  onClick={changeCurrencyEUR}
                  style={profileStyles.currBtn}
                >
                  <img alt='' width={44} src={euroGray} />
                </button>
                <button
                  onClick={changeCurrencyUSD}
                  style={profileStyles.currBtn}
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
              <div style={profileStyles.langBtnsWrap}>
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
                  style={profileStyles.langBtn}
                >
                  UA
                </button>
                <button
                  onClick={() => {
                    props.changeLangHandler('en');
                  }}
                  style={profileStyles.langBtn}
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
                <button style={profileStyles.logoutBtn}>Log out</button>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=''
          src={require('../../assets/images/blot-profile.png')}
          style={{ marginTop: '44px', marginBottom: '-6px', width: '100%' }}
        />
      </div>

      <div className='purchasedCourses' style={{ marginBottom: '100px' }}>
        <div>
          <p style={profileStyles.purchCourses}>PURCHASED COURSES</p>
        </div>

        <div className='cards' style={profileStyles.cardsWrap}>
          {coursesObj.map((course: any, i: number) => (
            <MovieCard
              key={i}
              index={i}
              course={course}
              language={props.language}
              currency={props.currency}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
