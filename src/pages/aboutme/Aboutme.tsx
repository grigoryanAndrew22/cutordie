import { Fragment } from 'react';
import { aboutmeStyles } from './Aboutme.styles';
import './Aboutme.css';

export const Aboutme = (props: any) => {
  const row = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Fragment>
      <div
        className='barber-profile-wrapper'
        style={aboutmeStyles.barderProfileWrapper}
      >
        <div style={aboutmeStyles.firstSection}>
          <div className='whyme' style={aboutmeStyles.whyme}>
            <p style={aboutmeStyles.whymeP}>WHY ME?</p>
            <p style={aboutmeStyles.pStyle}>-BECAUSE,</p>
            <p style={aboutmeStyles.pStyle}>-MAMA SAID IM THЕ BEST,</p>
            <p style={aboutmeStyles.pStyle}>-BECAUSE.</p>
          </div>
          <div className='pfp'>
            <img
              className='barber-pfp'
              alt=''
              src={require('../../assets/images/barberpfp.webp')}
              height={600}
              width={550}
            />
          </div>
        </div>
      </div>

      <div className='underpfp' style={aboutmeStyles.inscription}>
        <p style={aboutmeStyles.inscrText}>
          Building a rapport with clients can be crucial. People often choose
          barbers they feel comfortable with and with whom they can have a
          friendly relationship. If you're personable and make your clients feel
          at ease, they may prefer you as their barber.
        </p>
      </div>

      <div className='portfolio' style={aboutmeStyles.portfolioWrap}>
        <p style={aboutmeStyles.portfolioTitle}>MY PORTFOLIO</p>
        <div className='photos_row1' style={aboutmeStyles.photosRow}>
          {row.map((i: any) => (
            <img
              alt=''
              src={require(`../../assets/images/haircutpic${i}.png`)}
              style={{ marginBottom: '100px' }}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
