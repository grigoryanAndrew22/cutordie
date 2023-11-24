const generateStylesObj = (props: any) => {
  return {
    margin: '0px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16%',
    flexDirection: props.flexDirection,
  };
};

export const offerStyles = {
  price: {
    paddingLeft: 25,
    fontSize: '90px',
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
    fontSize: '65px',
    fontWeight: 100,
    color: '#383838',
    margin: 0,
    paddingBottom: 10,
  },
  wrapper: generateStylesObj,
  description: {
    fontSize: '37px',
    listStyleType: `"-"`,
  },
};
