const generateDropdownStyles = (dropdownActive: boolean) => {
  return {
    listStyle: 'none',
    position: 'absolute' as 'absolute',
    background: 'black',
    opacity: '83%',
    right: '-10px',
    top: '47px',
    margin: 0,
    padding: 0,
    display: dropdownActive ? 'flex' : 'none',
    flexDirection: 'column' as 'column',
    height: '132px',
    width: 'calc(100% + 10px)',
    justifyContent: 'space-between',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  };
};

export const navbarRawStyles = {
  navbarWrapper: {
    background: '#000',
    opacity: '83%',
    position: 'fixed' as 'fixed',
    zIndex: '1',
    boxShadow:
      '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
    boxSizing: 'border-box' as 'border-box',
    height: '73px',
    width: '-webkit-fill-available',
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
  },
  aboutMe: {
    fontSize: '17px',
    letterSpacing: '0.02857em',
    textWrap: 'nowrap',
  },
  signinBTN: {
    border: 'none',
    background: 'transparent',
    color: 'inherit',
    fontSize: '17px',
    letterSpacing: '0.02857em',
    cursor: 'pointer',
    fontFamily: 'inherit',
    textWrap: 'nowrap',
  },
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
};
