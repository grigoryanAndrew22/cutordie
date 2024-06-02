import { Fragment, useEffect, useState } from 'react';
import './Courses.css';
import { MovieCard } from '../../components/movie-card/MovieCard';
import { coursesStyles } from './Courses.styles';

export const Courses = (props: any) => {
  const [coursesObj, setCourses] = useState([]);
  console.log(coursesObj);

  const titleLang = props.language === 'en' ? 'HAIRCUTS FOR STARTER' : 'СТРИЖКИ ДЛЯ НОВАЧКІВ';

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
      <div className="haircuts-section">
        <div className="title">
          <h1>{titleLang}</h1>
        </div>

        <div className="cards">
          {coursesObj.map((course: any, i: any) => (
            <MovieCard
              key={course._id}
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
