import { Fragment } from 'react';
import '../pagenotFound/pageNotFound.css';
import AnimatedButton from '../../components/animated-button/AnimatedButton';

export const PageNotFound = (props: any) => {
  return (
    <Fragment>
      {/* <NavbarRaw /> */}
      <div className="wrapper404" style={{ height: '100vh' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '90px',
            color: '#8D0000',
          }}
        >
          <p style={{ fontFamily: 'Drum', fontSize: '190px', margin: 0 }}>404</p>
          <p
            style={{
              fontFamily: 'Drum',
              fontSize: '70px',
              margin: 0,
              paddingBottom: '300px',
            }}
          >
            PAGE NOT FOUND
          </p>
          <AnimatedButton
            url={'/'}
            buttonType={'allcourses'}
            text={'Back to main'}
            width={661}
            height={173}
            top={40}
            left={48.5}
            color={'171717'}
            font={'Drum'}
            textClass={'button3'}
          />
        </div>
      </div>
    </Fragment>
  );
};
