const generateDropdownStyles = (dropdownActive: boolean) => {
  return {
    listStyle: 'none',
    position: 'absolute' as 'absolute',
    background: 'black',
    opacity: '83%',
    right: '0px',
    top: '47px',
    margin: 0,
    padding: 0,
    display: dropdownActive ? 'flex' : 'none',
    flexDirection: 'column' as 'column',
    height: '132px',
    width: '130px',
    justifyContent: 'space-between',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '13px',
    marginTop: '25px',
  };
};

const generateSignInBTNStyles = (loggedIn: boolean) => {
  return {
    border: 'none',
    background: 'transparent',
    color: 'inherit',
    fontSize: '17px',
    letterSpacing: '0.02857em',
    cursor: 'pointer',
    fontFamily: 'inherit',
    textWrap: 'nowrap',
    display: loggedIn ? 'none' : 'inline',
    paddingBottom: '2px',
  };
};

export const navbarRawStyles = {
  navbarWrapper: {
    background: '#000',
    opacity: '83%',
    position: 'fixed' as 'fixed',
    zIndex: '1',
    boxSizing: 'border-box' as 'border-box',
    height: '73px',
    width: '100%',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '98%',
    margin: '0 auto',
    alignItems: 'center',
    height: '100%',
  },
  tabs: {
    width: '30%',
    display: 'flex',
    justifyContent: 'end',
    color: 'white',
    fontFamily: 'Bitter',
    alignItems: 'center',
    whiteSpace: 'nowrap' as 'nowrap',
  },
  aboutMe: {
    fontSize: '17px',
    letterSpacing: '0.02857em',
    textWrap: 'nowrap',
  },
  signinBTN: generateSignInBTNStyles,
  li: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  a: {
    paddingLeft: '5px',
    color: 'inherit',
    textDecoration: 'none',
  },
  dropdown: generateDropdownStyles,
  button: {
    textDecoration: 'none',
    fontFamily: 'inherit',
    background: 'transparent',
    color: 'inherit',
    border: 'none',
    cursor: 'pointer',
    fontSize: 'inherit',
  },
};
