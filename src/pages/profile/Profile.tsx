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
import { ChangePasswordForm } from '../../components/changePasswordForm/ChangePasswordForm';

const profLangs = {
  en: {
    title: 'MY PROFILE',
    name: 'Name',
    email: 'Email',
    password: 'Password',
    settings: 'SETTINGS',
    logout: 'Log out',
    purchased: 'PURCHASED COURSES',
  },
  ua: {
    title: 'МІЙ ПРОФІЛЬ',
    name: `Ім'я`,
    email: 'Пошта',
    password: 'Пароль',
    settings: 'НАЛАШТУВАННЯ',
    logout: 'Вийти',
    purchased: 'ВАШІ КУРСИ',
  },
};

// const url = 'https://cut-or-die-api.onrender.com/api/v1/users/resetPassword';
//  const requestOptions = {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ email: email })
//  };
//  try {
//   const response = await fetch(url, requestOptions);
//   if (!response.ok) {
//     throw new Error(HTTP error! status: ${response.status});
//   }
//   const data = await response.json();
//   console.log('Success:', data);
// } catch (error) {
//   console.error('Error:', error);
// }

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

  console.log(props.user);

  const [coursePurchased, setCoursePurchased] = useState(false);

  const [changePassShown, setChangePassShown] = useState(false);

  let purchasedCourses = props.user.purchasedCourses;
  if (!purchasedCourses) {
    purchasedCourses = [];
  }

  const setChangePassTrue = () => {
    setChangePassShown(true);

    fetch('https://cut-or-die-api.onrender.com/api/v1/users/forgotPassword', {
      method: 'POST', // or 'POST', 'PUT', etc.
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: props.user.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const setChangePassFalse = () => {
    setChangePassShown(false);
  };
  const prevStep = () => {
    setChangePassShown(true);
  };

  const chosenLang = props.language === 'en' ? profLangs.en : profLangs.ua;

  // const [coursesObj, setCourses] = useState([]);

  return (
    <Fragment>
      {/* <PaymentCard /> */}
      <ChangePasswordForm
        shown={changePassShown}
        hide={setChangePassFalse}
        prevStep={prevStep}
        email={props.user.email}
      />
      <div className="prof-sett-wrapper" style={{ boxShadow: 'black 0px 110px 120px' }}>
        <div className="wrapperChild" style={profileStyles.wrapperChild}>
          <div className="myprofile" style={{ width: '37%' }}>
            <p className="prof-title" style={profileStyles.profileTitle}>
              {chosenLang.title}
            </p>

            <div className="prof-info" style={{ marginTop: '45px' }}>
              <div className="name_surname" style={profileStyles.nameSurname}>
                <div className="name">
                  <div style={profileStyles.nameWrap}>
                    <img alt="" src={pencil} width={29} height={33} />
                    <label htmlFor="name" style={profileStyles.nameLabel}>
                      {chosenLang.name}:
                    </label>
                  </div>
                </div>
                <input
                  className="email-input profile-input"
                  value={props.user.userName}
                  type="email"
                  style={profileStyles.input}
                />

                <div style={profileStyles.emailWrap}>
                  <img alt="" src={pencil} width={29} height={33} />
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: 'Bitter',
                      fontSize: '22px',
                    }}
                  >
                    {chosenLang.email}:
                  </label>
                </div>
                <input
                  className="email-input profile-input"
                  value={props.user.email}
                  type="email"
                  style={profileStyles.input}
                />
                <div style={profileStyles.emailWrap}>
                  <img alt="" src={pencil} width={29} height={33} />
                  <label
                    htmlFor="email"
                    style={{
                      fontFamily: 'Bitter',
                      fontSize: '22px',
                    }}
                  >
                    {chosenLang.password}:
                  </label>
                </div>
                <input
                  className="password-input profile-input"
                  value={'password123'}
                  type="password"
                  style={profileStyles.input}
                  onClick={setChangePassTrue}
                />
              </div>
            </div>
          </div>
          <div className="settings prof-setts" style={{ zIndex: 0 }}>
            <p className="sett-title" style={profileStyles.settTitle}>
              {chosenLang.settings}
            </p>
            <div className="currency-section" style={{ display: 'flex', marginTop: '83px' }}>
              <div style={profileStyles.coinWrap}>
                <img alt="" src={coinGray} width={55} />
              </div>

              <div style={profileStyles.currencyWrap}>
                <img
                  alt=""
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
                  alt=""
                  src={require('../../assets/images/circle1.png')}
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: 60,
                    width: 62,
                    display: props.currency === 'eur' ? 'inline-block' : 'none',
                  }}
                />
                <img
                  alt=""
                  src={require('../../assets/images/circle1.png')}
                  style={{
                    position: 'absolute',
                    top: -13,
                    left: 120,
                    width: 62,
                    display: props.currency === 'usd' ? 'inline-block' : 'none',
                  }}
                />
                <button onClick={changeCurrencyUAH} style={profileStyles.currBtn}>
                  <img alt="" width={32} src={hryvniaGray} />
                </button>
                <button onClick={changeCurrencyEUR} style={profileStyles.currBtn}>
                  <img alt="" width={44} src={euroGray} />
                </button>
                <button onClick={changeCurrencyUSD} style={profileStyles.currBtn}>
                  <img alt="" width={32} src={dollarGray} />
                </button>
              </div>
            </div>
            <div
              className="language-section"
              style={{ display: 'flex', width: '98%', marginTop: '30px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginRight: '55px' }}>
                <img alt="" src={langIconGray} width={53} height={53} />
              </div>
              <div style={profileStyles.langBtnsWrap}>
                <img
                  alt=""
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
                  alt=""
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
              className="logout-section"
              style={{
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img alt="" src={logoutGray} width={50} />
              <div style={{ paddingLeft: '70px' }}>
                <button style={profileStyles.logoutBtn}>{chosenLang.logout}</button>
              </div>
            </div>
          </div>
        </div>
        <img
          alt=""
          src={require('../../assets/images/blot-profile.png')}
          style={{ marginTop: '44px', marginBottom: '-6px', width: '100%' }}
        />
      </div>

      <div className="purchasedCourses" style={{ marginBottom: '100px' }}>
        <div>
          <p style={profileStyles.purchCourses}>{chosenLang.purchased}</p>
        </div>

        <div className="cards" style={profileStyles.cardsWrap}>
          {purchasedCourses.map((course: any, i: number) => (
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
