import { Fragment, useState } from 'react';
import buyNowbtn from '../../assets/images/buyNowbtn.svg';
import { courseStyles } from './Course.styles';
import '../course/Course.css';
import { SignInForm } from '../../components/signin-form/SignInForm';
import { PaymentCard } from '../../components/paymentCard/PaymentCard';
import AnimatedButton from '../../components/animated-button/AnimatedButton';
import Cookies from 'js-cookie';
import { log } from 'console';

export const Course = (props: any) => {
  const [courseForm, switchCourseForm] = useState(false);
  const [coursePayment, switchCoursePay] = useState(false);

  const switchCF = () => {
    switchCourseForm(true);
  };

  const closePay = () => {
    switchCoursePay(false);
  };

  const closeForm = () => {
    switchCourseForm(false);
  };

  const openPayment = () => {
    // switchCoursePay(true);

    const data = { jwt: Cookies.get('jwt') };

    fetch(
      'https://cut-or-die-api.onrender.com/api/v1/courses/createInvoice/66580a7214488740bcdca62e',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        window.open(data.pageUrl, '_blank');
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Fragment>
      <SignInForm
        visible={courseForm}
        switch={closeForm}
        language={props.language}
        setLogin={props.changeLogin}
        closeForm={switchCourseForm}
      />
      <PaymentCard visible={coursePayment} closePay={closePay} />

      <div className="course-wrapper">
        <div style={{ width: '91%', margin: 'auto' }}>
          <div style={{ paddingTop: '100px' }}>
            <p
              className="course_heading"
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
          <div
            className="course-description controlWr"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div className="course-preview" style={{ display: 'flex' }}>
              <img
                className="course-preview-main"
                alt=""
                src={require('../../assets/images/coursePrev.png')}
                width="1058"
                height="596"
              />
            </div>
            <div className="course-about">
              <p
                style={{
                  margin: 0,
                  fontSize: '46px',
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
                <img alt="" src={require('../../assets/images/scissorSm.png')} width={45} />
                <p
                  style={{
                    margin: 0,
                    color: '#363636',
                    fontSize: '30px',
                    fontFamily: 'Bitter',
                    paddingLeft: '20px',
                    fontWeight: 500,
                  }}
                >
                  Difficulty:
                </p>
                <p
                  style={{
                    margin: 0,
                    color: '#363636',
                    fontSize: '30px',
                    fontFamily: 'Bitter',
                    paddingLeft: '20px',
                    fontWeight: 700,
                  }}
                >
                  Very easy
                </p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: '28px',
                }}
              >
                <img alt="" src={require('../../assets/images/clockSm.png')} width={45} />
                <p
                  style={{
                    margin: 0,
                    color: '#363636',
                    fontSize: '30px',
                    fontFamily: 'Bitter',
                    paddingLeft: '20px',
                    fontWeight: 500,
                  }}
                >
                  Duration:
                </p>
                <p
                  style={{
                    margin: 0,
                    color: '#363636',
                    fontSize: '30px',
                    fontFamily: 'Bitter',
                    paddingLeft: '20px',
                    fontWeight: 700,
                  }}
                >
                  1h 56m
                </p>
              </div>
              <span
                style={{
                  margin: 0,
                  color: '#363636',
                  fontSize: '30px',
                  fontFamily: 'Bitter',

                  fontWeight: 500,
                }}
              >
                Equipment:
              </span>
              <span
                style={{
                  margin: 0,
                  color: '#363636',
                  fontSize: '30px',
                  fontFamily: 'Bitter',
                  paddingLeft: '20px',
                  fontWeight: 600,
                }}
              >
                clipper and scissors
              </span>
              <div
                className="buy-offer"
                style={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}
              >
                <button
                  className="buy-btn buy-btn-prev"
                  style={courseStyles.buyBtn}
                  onClick={props.loggedIn ? openPayment : switchCF}
                >
                  {/* <img src={buyNowbtn} alt="btn" width={'95%'} height={'100%'} /> */}
                  <AnimatedButton
                    url={''}
                    buttonType={'buynow'}
                    text={'Buy now'}
                    width={363}
                    height={142}
                    top={57}
                    left={49}
                    color={'363636'}
                    font={'Besom'}
                    textClass={'button2'}
                  />
                </button>
                <p
                  style={{
                    margin: 0,
                    color: '#363636',
                    fontSize: '24px',
                    fontFamily: 'Bitter',
                    padding: '0px 30px',
                    fontWeight: 600,
                  }}
                >
                  for
                </p>
                <p
                  className="price-indicator"
                  style={{
                    margin: 0,
                    fontFamily: 'Hey October',
                    fontSize: '70px',
                    color: '#363636',
                    position: 'relative',
                  }}
                >
                  5$
                </p>
              </div>
            </div>
          </div>

          <div className="course-descr-section" style={{ display: 'flex', marginTop: '100px' }}>
            <p
              style={{
                margin: 0,
                fontFamily: 'Bitter',
                fontSize: '24px',
                color: '#232323',
                paddingRight: '60px',
                fontWeight: 600,
              }}
            >
              Welcome to "Mastering the Art of Haircutting," a comprehensive online course designed
              to transform your hairstyling skills and unleash your creativity in the world of
              hairdressing. Whether you're an aspiring hairstylist or a seasoned professional
              looking to refine your techniques, this course is tailored to meet your needs and take
              your haircutting abilities to new heights.Welcome to "Mastering the Art of
              Haircutting," a comprehensive online course designed to transform your hairstyling
              skills and unleash your creativity in the world of hairdressing. Whether you're an
              aspiring hairstylist or a seasoned professional looking to refine your techniques,
              this course is tailored to meet your needs and take your haircutting abilities to new
              heights.
            </p>
            <img
              alt=""
              className="course-img"
              src={require('../../assets/images/coursePrev.png')}
            />
          </div>

          <div
            className="course-descr-section"
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
                fontWeight: 600,
              }}
            >
              Welcome to "Mastering the Art of Haircutting," a comprehensive online course designed
              to transform your hairstyling skills and unleash your creativity in the world of
              hairdressing. Whether you're an aspiring hairstylist or a seasoned professional
              looking to refine your techniques, this course is tailored to meet your needs and take
              your haircutting abilities to new heights.Welcome to "Mastering the Art of
              Haircutting," a comprehensive online course designed to transform your hairstyling
              skills and unleash your creativity in the world of hairdressing. Whether you're an
              aspiring hairstylist or a seasoned professional looking to refine your techniques,
              this course is tailored to meet your needs and take your haircutting abilities to new
              heights.
            </p>
            <img
              className="course-img"
              alt=""
              src={require('../../assets/images/coursePrev.png')}
            />
          </div>

          <div className="course-descr-section" style={{ display: 'flex', marginTop: '120px' }}>
            <p
              style={{
                margin: 0,
                fontFamily: 'Bitter',
                fontSize: '24px',
                color: '#232323',
                paddingRight: '60px',
                fontWeight: 600,
              }}
            >
              Welcome to "Mastering the Art of Haircutting," a comprehensive online course designed
              to transform your hairstyling skills and unleash your creativity in the world of
              hairdressing. Whether you're an aspiring hairstylist or a seasoned professional
              looking to refine your techniques, this course is tailored to meet your needs and take
              your haircutting abilities to new heights.Welcome to "Mastering the Art of
              Haircutting," a comprehensive online course designed to transform your hairstyling
              skills and unleash your creativity in the world of hairdressing. Whether you're an
              aspiring hairstylist or a seasoned professional looking to refine your techniques,
              this course is tailored to meet your needs and take your haircutting abilities to new
              heights.
            </p>
            <img
              alt=""
              className="course-img"
              src={require('../../assets/images/coursePrev.png')}
            />
          </div>

          <div
            className="buy-foronly"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '65px 0px 70px 0px ',
            }}
          >
            <button
              className="buy-btn"
              style={courseStyles.buyBtn}
              onClick={props.loggedIn ? openPayment : switchCF}
            >
              <img src={buyNowbtn} alt="btn" width={'95%'} height={'100%'} />
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
        <div className="blot" style={{ width: '100%', display: 'flex' }}>
          <img
            src={require('../../assets/images/blot2.webp')}
            alt="blot"
            style={{ width: '-webkit-fill-available' }}
          />
        </div>
      </div>
    </Fragment>
  );
};
