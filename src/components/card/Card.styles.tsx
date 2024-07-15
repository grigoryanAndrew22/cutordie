import cardBG from '../../assets/images/cardBG.webp';

const createStyleObj = (props: any) => {
  return {
    boxShadow: '0.5px 0.5px 25px #28282B, -0.5px -0.5px 25px #28282B',
    height: '350px',
    width: '340px',
    backgroundImage: `url(${cardBG})`,
    backgroundPosition: 'center',
    position: props.position,
    top: props.top,
    left: props.left,
    transform: props.transform,
  };
};

export const cardStyles = {
  cardWrapper: createStyleObj,
  title: {
    margin: 0,
    marginTop: '16px',
    paddingLeft: '10px',
    color: 'black',
    fontFamily: 'Bitter',
    fontSize: '22px',
  },
  description: {
    width: '90%',
    margin: '0px auto',
    paddingTop: 20,
    fontFamily: 'Bitter',
    color: '#1D1D1D',
    fontSize: '12px',
  },
  image: {
    width: '90%',
    margin: '0px auto',
    paddingTop: 17,
  },
};
