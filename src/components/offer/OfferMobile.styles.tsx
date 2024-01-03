const generateStylesObj = () => {
  return {
    width: '80%',
    margin: '0px auto',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
  };
};

export const offerMobileStyles = {
  price: {
    paddingLeft: 10,
    fontSize: '65px',
    fontWeight: 100,
    color: '#363636',
  },
  buyBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    height: 110,
    width: 220,
    padding: 0,
    textAlign: 'start' as 'start',
  },
  title: {
    fontSize: '49px',
    fontWeight: 100,
    color: '#383838',
    margin: 0,
    paddingBottom: 10,
  },
  wrapper: generateStylesObj,
  description: {
    fontSize: '25px',
  },
  descriptionWrap: {
    alignSelf: 'start',
    fontFamily: 'Drum',
    position: 'relative' as 'relative',
  },
  discount: {
    position: 'absolute' as 'absolute',
    fontFamily: 'Hey October',
    fontSize: '38px',
    color: '#900000',
    top: '-31px',
    right: '11%',
    margin: '0px',
  },
  buyBtnWrap: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 40,
    alignSelf: 'start',
    width: '100%',
    justifyContent: 'space-between',
  },
  priceWrap: {
    position: 'relative' as 'relative',
    whiteSpace: 'nowrap' as 'nowrap',
    width: 'calc(100% - 235px)',
  },
};
