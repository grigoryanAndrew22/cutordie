import scissorsWhite from '../../assets/images/scissorsWhite.png';
import scissorsGray from '../../assets/images/scissorsGray.png';
import timerIcon from '../../assets/images/timerIcon.png';
import cornerIconRB from '../../assets/images/cornerIconRB.png';
import '../movie-card/MovieCard.css';

export const MovieCard = (props: any) => {
  return (
    <div className='haircutWrap' style={{ display: 'flex' }}>
      <div
        className='card'
        style={{
          backgroundImage: `url(${require('../../assets/images/haircutCardBG.webp')})`,
          display: 'flex',
          flexDirection: 'column',
          width: '400px',
          position: 'relative',
          marginTop: '80px',
        }}
      >
        <img
          src={cornerIconRB}
          style={{
            position: 'absolute',
            left: '-8px',
            top: '-8px',
            transform: 'rotate(180deg)',
          }}
        />
        <img
          src={cornerIconRB}
          style={{ position: 'absolute', right: '-8px', bottom: '-8px' }}
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
          <a href='/cutordie/courses/course'>
            <img
              src={require('../../assets/images/haircutCardPreview.png')}
              width={'360px'}
              style={{ paddingTop: '20px' }}
            />
          </a>

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
                color: '#444444',
                fontFamily: 'Bitter',
                fontWeight: '600',
                fontSize: '17px',
                paddingLeft: '9px',
              }}
            >
              Hard
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
              fontFamily: 'Bitter',
              color: '#444444',
              margin: 0,
              fontSize: '18px',
              lineHeight: '24px',
              fontWeight: 500,
            }}
          >
            {props.course.description}
          </p>
        </div>
      </div>
    </div>
  );
};
function includes(index: any) {
  throw new Error('Function not implemented.');
}
