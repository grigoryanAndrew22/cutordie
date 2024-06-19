import { Fragment, useEffect, useState } from 'react';
import buyNowbtn from '../../assets/images/buyNowbtn.svg';
import { courseStyles } from './Course.styles';
import '../course/Course.css';
import { SignInForm } from '../../components/signin-form/SignInForm';
import { PaymentCard } from '../../components/paymentCard/PaymentCard';
import AnimatedButton from '../../components/animated-button/AnimatedButton';
import Cookies from 'js-cookie';
import { log } from 'console';
import { CourseParagraph } from '../../components/CourseParagraph/CourseParagraph';

export const Course = (props: any) => {
  const [courseName, setCourseName] = useState('')
  const [courseSubHeader, setCourseSubHeader] = useState('')
  const [courseDuration,setCourseDuration] = useState('1h');
  const [courseDiff, setCourseDiff] = useState('0');
  const [courseEquipment,setCourseEquipment] = useState('')
  const [courseParagraphs, setCourseParagraphs] = useState([])
  const [coursePrice, setCoursePrice] = useState('')

  const [courseForm, switchCourseForm] = useState(false);
  const [coursePayment, switchCoursePay] = useState(false);

  console.log(props.language)

  const selectedCourse = props.courses.filter((course: any) => {
    return (
      course._id === window.location.pathname.replace('/courses/course/', '')
    );
  });

  const boughtCourse = props.user.purchasedCourses?.filter((course: any) => {
    return (
      course === window.location.pathname.replace('/courses/course/', '')
    );
  })

  console.log(props.courses)
  // console.log(selectedCourse[0])

  useEffect(() => {
    if(selectedCourse !== undefined) {
       setCourseDuration(`${Math.trunc(selectedCourse[0]?.duration / 60)}h ${selectedCourse[0]?.duration % 60}m`)
       setCourseDiff(selectedCourse[0]?.difficulty)
       setCourseEquipment(selectedCourse[0]?.equipment)
       if(props.language === 'ua') {
        setCourseParagraphs(selectedCourse[0]?.ua.paragraphs)
        setCourseName(selectedCourse[0]?.ua.name)
        setCourseSubHeader(selectedCourse[0]?.ua.subheader)
       } else {
        setCourseParagraphs(selectedCourse[0]?.en.paragraphs)
        setCourseName(selectedCourse[0]?.en.name)
        setCourseSubHeader(selectedCourse[0]?.en.subheader)
       }
       if(props.currency === 'uah') {
        setCoursePrice(selectedCourse[0]?.price.uah)
       } else if(props.currency === 'eur') {
        setCoursePrice(selectedCourse[0]?.price.eur + '€')
       } else {
        setCoursePrice(selectedCourse[0]?.price.usd + '$')
       }
    } 
  }, [selectedCourse])


  const courseIsBought = (selectedCourse && boughtCourse) ? (selectedCourse[0]?._id === boughtCourse[0]) : false;
  
  let btnText = ''
  if(props.language === 'ua') {
    btnText = courseIsBought ? 'До курсу' : 'Купити'
  } else {
    btnText = courseIsBought ? 'To course' : 'Buy now'
  }

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

    const data = { jwt: localStorage.getItem('jwt') };

    fetch(
      `https://cut-or-die-api.onrender.com/api/v1/courses/createInvoice/${selectedCourse[0]?._id}`,
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
        window.open(data.data.pageUrl, '_blank');
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

      <div className='course-wrapper'>
        <div style={{ width: '91%', margin: 'auto' }}>
          <div style={{ paddingTop: '100px' }}>
            <p
              className='course_heading'
              style={{
                margin: 0,
                color: '#373737',
                fontSize: '83px',
                fontFamily: 'Drum',
                paddingBottom: '70px',
              }}
            >
             {courseName}
            </p>
          </div>
          <div
            className='course-description controlWr'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div className='course-preview' style={{ display: 'flex' }}>
              <img
                className='course-preview-main'
                alt=''
                src={require('../../assets/images/coursePrev.png')}
                width='1058'
                height='596'
              />
            </div>
            <div className='course-about'>
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
                {courseSubHeader}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingBottom: '28px',
                }}
              >
                <img
                  alt=''
                  src={require('../../assets/images/scissorSm.png')}
                  width={45}
                />
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
                  {courseDiff}
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
                  alt=''
                  src={require('../../assets/images/clockSm.png')}
                  width={45}
                />
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
                  {courseDuration}
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
                {courseEquipment}
              </span>
              <div
                className='buy-offer'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '2rem',
                }}
              >
                <button
                  className='buy-btn buy-btn-prev'
                  style={courseStyles.buyBtn}
                  onClick={props.loggedIn ? openPayment : switchCF}
                >
                  {/* <img src={buyNowbtn} alt="btn" width={'95%'} height={'100%'} /> */}
                  <AnimatedButton
                    url={''}
                    buttonType={'buynow'}
                    text={btnText}
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
                  className='price-indicator'
                  style={{
                    margin: 0,
                    fontFamily: 'Hey October',
                    fontSize: '70px',
                    color: '#363636',
                    position: 'relative',
                  }}
                >
                  {coursePrice} 
                  {(props.currency === 'uah') && <img style={{width: '44px'}} src={require('../../assets/images/uahgray.png')}/>}
                </p>
              </div>
            </div>
          </div>

          {courseParagraphs?.map((text,i) => <CourseParagraph key={i} text={text} reverse={i % 2 === 0}/>)}

          <div
            className='buy-foronly'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '65px 0px 70px 0px ',
            }}
          >
            <button
              className='buy-btn'
              style={courseStyles.buyBtn}
              onClick={props.loggedIn ? openPayment : switchCF}
            >

              <AnimatedButton
                url={''}
                buttonType={'buynow'}
                text={btnText}
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
              {coursePrice}
              {(props.currency === 'uah') && <img style={{width: '44px'}} src={require('../../assets/images/uahgray.png')}/>}
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
    </Fragment>
  );
};
