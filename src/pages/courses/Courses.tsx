import { Fragment, useEffect, useState } from 'react';
import './Courses.css';
import { MovieCard } from '../../components/movie-card/MovieCard';
import { coursesStyles } from './Courses.styles';

export const Courses = (props: any) => {
  const titleLang =
    props.language === 'en' ? 'HAIRCUTS FOR STARTER' : 'СТРИЖКИ ДЛЯ НОВАЧКІВ';

  return (
    <Fragment>
      <div className='haircuts-section' style={coursesStyles.haircutsSection}>
        <div className='title'>
          <h1 style={coursesStyles.title}>{titleLang}</h1>
        </div>

        <div className='cards' style={coursesStyles.cards}>
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
