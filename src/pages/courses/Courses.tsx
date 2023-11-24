import { Fragment, useEffect, useState } from 'react';
import { NavbarRaw } from '../../components/navbarRaw/NavbarRaw';
import { Footer } from '../../components/footer/Footer';
import { FooterMobile } from '../../components/footerMobile/FooterMobile';
import './Courses.css';
import { MovieCard } from '../../components/movie-card/MovieCard';
import axios from 'axios';
import { coursesStyles } from './Courses.styles';

export const Courses = (props: any) => {
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

  const [currency, changeCurrency] = useState('usd');
  const [language, changeLanguage] = useState('en');

  const changeLang = (lang: string) => {
    changeLanguage(lang);
  };

  return (
    <Fragment>
      <NavbarRaw language={language} changeLogin={props.changeLogin} />

      <div className='haircuts-section' style={coursesStyles.haircutsSection}>
        <div className='title'>
          <h1 style={coursesStyles.title}>HAIRCUTS FOR STARTER</h1>
        </div>

        <div className='cards' style={coursesStyles.cards}>
          {coursesObj.map((course: any, i: any) => (
            <MovieCard key={course._id} index={i} course={course} />
          ))}
        </div>
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
