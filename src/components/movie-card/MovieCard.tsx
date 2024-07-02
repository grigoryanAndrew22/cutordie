import scissorsWhite from '../../assets/images/scissorsWhite.png';
import scissorsGray from '../../assets/images/scissorsGray.png';
import timerIcon from '../../assets/images/timerIcon.png';
import cornerIconRB from '../../assets/images/cornerIconRB.png';
import '../movie-card/MovieCard.css';
import { useState } from 'react';
import { MovieCardStyles } from './MovieCard.styles';

export const MovieCard = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  let priceObj;
  if (props.currency === 'usd') {
    priceObj = props.course.price.usd + '$';
  } else if (props.currency === 'uah') {
    priceObj = props.course.price.uah;
  } else {
    priceObj = props.course.price.eur + '€';
  }

  const courseObj = props.language === 'en' ? props.course.en : props.course.ua;

  const preview = require(`../../assets/images/courseCovers/${props.course.coverImage}.png`);

  return (
    <div
      className="haircutWrap"
      style={{
        display: 'flex',
        scale: isHovered ? '1.05' : '1',
        transition: 'all 0.1s ease',
      }}
    >
      <a
        href={`/courses/course/${props.id}`}
        className="card"
        style={{
          backgroundImage: `url(${require('../../assets/images/haircutCardBG.webp')})`,
          display: 'flex',
          flexDirection: 'column',
          width: '400px',
          position: 'relative',

          textDecoration: 'none',
          color: 'inherit',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={cornerIconRB}
          style={{
            position: 'absolute',
            top: isHovered ? '-18px' : '-8px',
            left: isHovered ? '-18px' : '-8px',
            transform: 'rotate(180deg)',
            transition: 'all 0.2s ease',
          }}
          alt="corner"
        />
        <img
          src={cornerIconRB}
          style={{
            position: 'absolute',
            bottom: isHovered ? '-18px' : '-8px',
            right: isHovered ? '-18px' : '-8px',
            transition: 'all 0.2s ease',
          }}
          alt="corner"
        />
        <div className="preview" style={MovieCardStyles.previewWrap}>
          <div style={MovieCardStyles.preview}>
            {/* <img
            src={props.course.difficulty === 1 ? scissorsWhite : scissorsGray}
          />
          <img
            src={props.course.difficulty === 2 ? scissorsWhite : scissorsGray}
          />
          <img
            src={props.course.difficulty === 3 ? scissorsWhite : scissorsGray}
          /> */}
            <img alt="" src={scissorsWhite} width={'30px'} />
            <img alt="" src={scissorsWhite} width={'30px'} />
            <img alt="" src={scissorsWhite} width={'30px'} />
          </div>

          <p className="price" style={MovieCardStyles.price}>
            {priceObj}
            {props.currency === 'uah' && (
              <img
                src={require('../../assets/images/hryvWhite.png')}
                width={'21px'}
                height={'30px'}
                style={{ paddingTop: '10.3px' }}
              />
            )}
          </p>

          <img
            className="haircut-preview"
            alt=""
            src={preview}
            width={'360px'}
            style={{ paddingTop: '20px' }}
          />

          <h2 className="course-title" style={MovieCardStyles.courseTitle}>
            {courseObj.name}
          </h2>
        </div>
        <div className="diff-duration" style={MovieCardStyles.diffDurWrap}>
          <div className="diff" style={{ display: 'flex', alignItems: 'center' }}>
            <img alt="" src={scissorsGray} width={25} />
            <p
              style={{
                margin: 0,
                paddingLeft: '7px',
                fontFamily: 'Bitter',
                color: '#444444',
                paddingTop: '3px',
                fontWeight: '600',
              }}
            >
              Hard
            </p>
          </div>
          <div className="duration" style={{ display: 'flex', alignItems: 'center' }}>
            <img alt="" src={timerIcon} width={25} />
            <p style={MovieCardStyles.duration}>{props.course.duration}h 00m</p>
          </div>
        </div>
        <div className="description" style={MovieCardStyles.descrWrap}>
          <p style={MovieCardStyles.description}>{courseObj.description}</p>
        </div>
      </a>
    </div>
  );
};
