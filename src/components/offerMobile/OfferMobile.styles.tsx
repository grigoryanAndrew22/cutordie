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
    paddingLeft: 25,
    fontSize: '50px',
    fontWeight: 100,
    color: '#363636',
  },
  buyBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    height: 110,
    width: 260,
    padding: 0,
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
    fontSize: '30px',
  },
};
