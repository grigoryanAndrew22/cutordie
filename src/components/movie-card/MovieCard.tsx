import scissorsWhite from '../../assets/images/scissorsWhite.png';
import scissorsGray from '../../assets/images/scissorsGray.png';
import timerIcon from '../../assets/images/timerIcon.png';
import cornerIconRB from '../../assets/images/cornerIconRB.png';
import '../movie-card/MovieCard.css';
import { useState } from 'react';

export const MovieCard = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='haircutWrap'
      style={{
        display: 'flex',
        scale: isHovered ? '1.05' : '1',
        transition: 'all 0.1s ease',
      }}
    >
      <a
        href='/cutordie/courses/course'
        className='card'
        style={{
          backgroundImage: `url(${require('../../assets/images/haircutCardBG.webp')})`,
          display: 'flex',
          flexDirection: 'column',
          width: '400px',
          position: 'relative',
          marginTop: '80px',
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
          alt='corner'
        />
        <img
          src={cornerIconRB}
          style={{
            position: 'absolute',
            bottom: isHovered ? '-18px' : '-8px',
            right: isHovered ? '-18px' : '-8px',
            transition: 'all 0.2s ease',
          }}
          alt='corner'
        />
        <div
          className='preview'
          style={{
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
          }}
        >
          <div style={{ position: 'absolute', left: '32px', top: '32px' }}>
            {/* <img
            src={props.course.difficulty === 1 ? scissorsWhite : scissorsGray}
          />
          <img
            src={props.course.difficulty === 2 ? scissorsWhite : scissorsGray}
          />
          <img
            src={props.course.difficulty === 3 ? scissorsWhite : scissorsGray}
          /> */}
            <img src={scissorsWhite} width={'30px'} />
            <img src={scissorsWhite} width={'30px'} />
            <img src={scissorsWhite} width={'30px'} />
          </div>
          <p
            className='price'
            style={{
              position: 'absolute',
              top: '28px',
              right: '34px',
              color: '#fff',
              fontSize: '40px',
              margin: 0,
              fontWeight: '600',
            }}
          >
            {props.course.price}$
          </p>
          <img
            src={require('../../assets/images/haircutCardPreview.png')}
            width={'360px'}
            style={{ paddingTop: '20px' }}
          />

          <h1
            className='course-title'
            style={{
              position: 'absolute',
              bottom: 0,
              color: '#fff',
              left: '35px',
              fontWeight: '600',
              fontFamily: 'Bitter',
              margin: '0px 0px 14px 0px',
            }}
          >
            {props.course.name}
          </h1>
        </div>
        <div
          className='diff-duration'
          style={{
            display: 'flex',
            width: '90%',
            justifyContent: 'space-between',
            margin: '0 auto',
          }}
        >
          <div
            className='diff'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src={scissorsGray} width={25} />
            <p
              style={{
                position: 'absolute',
                bottom: 0,
                color: '#fff',
                left: '35px',
                fontWeight: '600',
                fontFamily: 'Bitter',
                margin: '0px 0px 14px 0px',
              }}
            >
              {props.course.name}
            </p>
          </div>
          <div
            className='duration'
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <img src={timerIcon} width={25} />
            <p
              style={{
                color: '#444444',
                fontFamily: 'Bitter',
                fontWeight: '600',
                fontSize: '16px',
                paddingLeft: '9px',
                marginRight: '1.5px',
              }}
            >
              {props.course.duration}h 00m
            </p>
          </div>
        </div>
        <div
          className='description'
          style={{
            width: '90%',
            margin: '10px auto',
            paddingBottom: '30px',
          }}
        >
          <p
            style={{
              display: 'flex',
              width: '90%',
              justifyContent: 'space-between',
              margin: '0 auto',
            }}
          >
            {props.course.description}
          </p>
        </div>
      </a>
    </div>
  );
};
function includes(index: any) {
  throw new Error('Function not implemented.');
}
