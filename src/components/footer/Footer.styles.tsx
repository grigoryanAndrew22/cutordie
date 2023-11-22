const generateWrapperStyle = (bottomShadow: boolean) => {
  return {
    height: '340px',
    backgroundColor: 'black',
    boxShadow: bottomShadow ? '0px -100px 110px black' : '',
    // marginTop: '4rem',
    display: 'flex',
  };
};

export const FooterStyles = {
  wrapper: generateWrapperStyle,
  footerSection: {
    width: '93%',
    marginLeft: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    letterSpacing: '1px',
  },
  footerInfo: {
    listStyleType: 'none',
    color: '#CFCFCF',
    display: 'flex',
    margin: 0,
    height: '100%',
    alignItems: 'center',
    fontFamily: 'Bitter',
    fontSize: '1.7rem',
    justifyContent: 'space-between',
  },
  logoPart: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    fontFamily: 'Bitter',
  },
  infoItem: {
    height: '60%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'space-between',
  },
  currency: {
    display: 'flex',
    width: '88%',
    gap: '30px',
    paddingBottom: '20px',
    alignItems: 'center',
  },
  language: {
    display: 'flex',
    gap: '30px',
  },
  socialNetworks: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    height: '63%',
    justifyContent: 'space-between',
  },
};
