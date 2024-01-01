import { Fragment } from 'react';
import '../pagenotFound/pageNotFound.css';
import { NavbarRaw } from '../../components/navbarRaw/NavbarRaw';

export const PageNotFound = () => {
  return (
    <Fragment>
      <NavbarRaw />
      <div className='wrapper404' style={{ height: '100vh' }}>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '90px',
            color: '#8D0000',
            height: '100%',
          }}
        >
          <p style={{ fontFamily: 'Drum', fontSize: '190px', margin: 0 }}>
            404
          </p>
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
          <button>to the main page</button>
        </div>
      </div>
    </Fragment>
  );
};
