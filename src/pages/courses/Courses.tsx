import { Fragment, useEffect, useState } from 'react';
import './Courses.css';
import { MovieCard } from '../../components/movie-card/MovieCard';
import { coursesStyles } from './Courses.styles';

export const Courses = (props: any) => {
  const titleLang = props.language === 'en' ? 'Courses' : 'Курси';

  return (
    <Fragment>
      <div className="haircuts-section">
        <div className="title">
          <h1 className="courses-header">{titleLang}</h1>
        </div>

        <div className="cards">
          {props.coursesObj.map((course: any, i: any) => (
            <MovieCard
              key={course._id}
              id={course._id}
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

//  merge (from main) idk delete this or not
//   const [coursesObj, setCourses] = useState([]);
//   console.log(coursesObj);

//   const titleLang = props.language === 'en' ? 'HAIRCUTS FOR STARTER' : 'СТРИЖКИ ДЛЯ НОВАЧКІВ';
