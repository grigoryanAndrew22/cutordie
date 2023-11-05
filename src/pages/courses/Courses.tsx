import { Fragment, useEffect, useState } from 'react';
import { NavbarRaw } from '../../components/navbarRaw/NavbarRaw';
import { Footer } from '../../components/footer/Footer';
import { FooterMobile } from '../../components/footerMobile/FooterMobile';
import './Courses.css';
import { MovieCard } from '../../components/movie-card/MovieCard';
import axios from 'axios';

export const Courses = () => {
  const [coursesObj, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get('https://cut-or-die-api.onrender.com/api/v1/courses/')
      .then((response) => {
        setCourses(response.data.data.courses);
        console.log(response.data.data.courses);
      });
  }, []);

  const [currency, changeCurrency] = useState('usd');
  const [language, changeLanguage] = useState('en');

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <Fragment>
      <NavbarRaw language={language} />

      <div
        className='haircuts-section'
        style={{
          paddingTop: '140px',
          width: '88%',
          margin: '0 auto',
          paddingBottom: '100px',
        }}
      >
        <div className='title'>
          <h1
            style={{
              margin: 0,
              color: '#fff',
              fontWeight: '100',
              fontSize: '70px',
              marginTop: '-24px',
            }}
          >
            HAIRCUTS FOR STARTER
          </h1>
        </div>

        <div
          className='cards'
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3rem',
          }}
        >
          {coursesObj.map((course: any, i: any) => (
            <MovieCard key={course._id} index={i} course={course} />
          ))}
        </div>
        {/* <div
          className='cards'
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div> */}
      </div>

      <Footer
        language={language}
        changeLangHandler={changeLang}
        currency={currency}
        changeCurr={changeCurrency}
        bottomShadow={true}
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
