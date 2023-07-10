const generateStylesObj = (props: any) => {
  return {
    width: '80%',
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'space-around',
    height: '500px',
    alignItems: 'center',
    flexDirection: props.flexDirection,
  };
};

export const offerStyles = {
  price: {
    paddingLeft: 25,
    fontFamily: 'Permanent Marker',
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
    fontFamily: 'Chela One',
    fontSize: '49px',
    fontWeight: 100,
    color: '#383838',
    margin: 0,
    paddingBottom: 10,
  },
  wrapper: generateStylesObj,
  description: {
    fontFamily: 'Shadow Into Light, cursive',
    fontSize: '30px',
  },
};
