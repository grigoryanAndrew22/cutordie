import { Fragment, useState } from 'react';
import { NavbarRaw } from '../../components/navbarRaw/NavbarRaw';
import { Footer } from '../../components/footer/Footer';
import { FooterMobile } from '../../components/footerMobile/FooterMobile';
import buyNowbtn from '../../assets/images/buyNowbtn.svg';
import { courseStyles } from './Course.styles';
import '../course/Course.css';
import { SignInForm } from '../../components/signin-form/SignInForm';
import { PaymentCard } from '../../components/paymentCard/PaymentCard';

export const Course = (props: any) => {
  const [courseForm, switchCourseForm] = useState(false);
  const [coursePayment, switchCoursePay] = useState(false);

  const switchCF = () => {
    switchCourseForm(true);
  };

  const [currency, changeCurrency] = useState('usd');
  const [language, changeLanguage] = useState('en');

  const openPayment = () => {
    switchCoursePay(true);
  };

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <Fragment>
      <NavbarRaw
        language={language}
        changeLogin={props.changeLogin}
        loggedIn={props.loggedIn}
      />
      <SignInForm
        visible={courseForm}
        // switch={switchForm}
        language={props.language}
        setLogin={props.changeLogin}
        closeForm={switchCourseForm}
      />
      <PaymentCard visible={coursePayment} />

      <div className='course-wrapper'>
        <div style={{ width: '95%', margin: 'auto' }}>
          <div style={{ paddingTop: '100px' }}>
            <p
              style={{
                margin: 0,
                color: '#373737',
                fontSize: '83px',
                fontFamily: 'Drum',
                paddingBottom: '70px',
              }}
            >
              MASTERING THЕ ART OF HAIRCUTTING
            </p>
          </div>
          <div className='course-description' style={{ display: 'flex' }}>
            <div className='course-preview'>
              <img
                src={require('../../assets/images/coursePrev.png')}
                height={500}
              />
            </div>
            <div className='course-about' style={{ marginLeft: '160px' }}>
              <p
                style={{
                  margin: 0,
                  fontSize: '39px',
                  fontFamily: 'Bitter',
                  fontWeight: 600,
                  color: '#363636',
                  paddingBottom: '28px',
                }}
              >
                Haircutting basics
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: '28px',
                }}
              >
                <img
                  src={require('../../assets/images/scissorSm.png')}
                  width={36}
                />
                <p
                  style={{
                    margin: 0,
                    color: '#363636',
                    fontSize: '24px',
                    fontFamily: 'Bitter',
                    paddingLeft: '20px',
                  }}
                >
                  Difficulty: Very easy
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: '28px',
                }}
              >
                <img
                  src={require('../../assets/images/clockSm.png')}
                  width={36}
                />
                <p
                  style={{
                    margin: 0,
                    color: '#363636',
                    fontSize: '24px',
                    fontFamily: 'Bitter',
                    paddingLeft: '20px',
                  }}
                >
                  Duration: 1h 63m
                </p>
              </div>
              <p
                style={{
                  margin: 0,
                  color: '#363636',
                  fontSize: '24px',
                  fontFamily: 'Bitter',
                  paddingBottom: '65px',
                }}
              >
                Equipment: clipper and scissors
              </p>
              <div
                className='buy-offer'
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <button
                  className='buy-btn'
                  style={courseStyles.buyBtn}
                  onClick={props.loggedIn ? openPayment : switchCF}
                >
                  <img
                    src={buyNowbtn}
                    alt='btn'
                    width={'95%'}
                    height={'100%'}
                  />
                </button>
                <p
                  style={{
                    margin: 0,
                    color: '#363636',
                    fontSize: '24px',
                    fontFamily: 'Bitter',
                    padding: '0px 30px',
                  }}
                >
                  for
                </p>
                <p
                  style={{
                    margin: 0,
                    fontFamily: 'Hey October',
                    fontSize: '70px',
                    color: '#363636',
                  }}
                >
                  5$
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', marginTop: '100px' }}>
            <p
              style={{
                margin: 0,
                fontFamily: 'Bitter',
                fontSize: '24px',
                color: '#232323',
                paddingRight: '60px',
              }}
            >
              Welcome to "Mastering the Art of Haircutting," a comprehensive
              online course designed to transform your hairstyling skills and
              unleash your creativity in the world of hairdressing. Whether
              you're an aspiring hairstylist or a seasoned professional looking
              to refine your techniques, this course is tailored to meet your
              needs and take your haircutting abilities to new heights.Welcome
              to "Mastering the Art of Haircutting," a comprehensive online
              course designed to transform your hairstyling skills and unleash
              your creativity in the world of hairdressing. Whether you're an
              aspiring hairstylist or a seasoned professional looking to refine
              your techniques, this course is tailored to meet your needs and
              take your haircutting abilities to new heights.
            </p>
            <img
              src={require('../../assets/images/coursePrev.png')}
              height={300}
            />
          </div>

          <div
            style={{
              display: 'flex',
              marginTop: '120px',
              flexDirection: 'row-reverse',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: 'Bitter',
                fontSize: '24px',
                color: '#232323',
                paddingLeft: '60px',
              }}
            >
              Welcome to "Mastering the Art of Haircutting," a comprehensive
              online course designed to transform your hairstyling skills and
              unleash your creativity in the world of hairdressing. Whether
              you're an aspiring hairstylist or a seasoned professional looking
              to refine your techniques, this course is tailored to meet your
              needs and take your haircutting abilities to new heights.Welcome
              to "Mastering the Art of Haircutting," a comprehensive online
              course designed to transform your hairstyling skills and unleash
              your creativity in the world of hairdressing. Whether you're an
              aspiring hairstylist or a seasoned professional looking to refine
              your techniques, this course is tailored to meet your needs and
              take your haircutting abilities to new heights.
            </p>
            <img
              src={require('../../assets/images/coursePrev.png')}
              height={300}
            />
          </div>

          <div style={{ display: 'flex', marginTop: '120px' }}>
            <p
              style={{
                margin: 0,
                fontFamily: 'Bitter',
                fontSize: '24px',
                color: '#232323',
                paddingRight: '60px',
              }}
            >
              Welcome to "Mastering the Art of Haircutting," a comprehensive
              online course designed to transform your hairstyling skills and
              unleash your creativity in the world of hairdressing. Whether
              you're an aspiring hairstylist or a seasoned professional looking
              to refine your techniques, this course is tailored to meet your
              needs and take your haircutting abilities to new heights.Welcome
              to "Mastering the Art of Haircutting," a comprehensive online
              course designed to transform your hairstyling skills and unleash
              your creativity in the world of hairdressing. Whether you're an
              aspiring hairstylist or a seasoned professional looking to refine
              your techniques, this course is tailored to meet your needs and
              take your haircutting abilities to new heights.
            </p>
            <img
              src={require('../../assets/images/coursePrev.png')}
              height={300}
            />
          </div>

          <div
            className='buy-foronly'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '65px 0px 70px 0px ',
            }}
          >
            <button className='buy-btn' style={courseStyles.buyBtn}>
              <img src={buyNowbtn} alt='btn' width={'95%'} height={'100%'} />
            </button>
            <p
              style={{
                margin: 0,
                color: '#707070',
                fontSize: '42px',
                fontFamily: 'Drum',
                padding: '0px 35px 20px 35px',
              }}
            >
              FOR ONLY
            </p>
            <p
              style={{
                margin: 0,
                fontFamily: 'Hey October',
                fontSize: '70px',
                color: '#363636',
                paddingTop: '7px',
              }}
            >
              5$
            </p>
          </div>
        </div>
        <div className='blot' style={{ width: '100%', display: 'flex' }}>
          <img
            src={require('../../assets/images/blot2.webp')}
            alt='blot'
            style={{ width: '-webkit-fill-available' }}
          />
        </div>
      </div>

      <Footer
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
        bottomShadow={false}
      />
      <FooterMobile
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
      />
    </Fragment>
  );
};
