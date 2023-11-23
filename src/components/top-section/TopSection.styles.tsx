import background from '../../assets/images/topSectionBG.jpg';

export const TopSectionStyles = {
  topSection: {
    height: 950,
    width: '100%',
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  buttonsWrapper: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    width: '90%',
    margin: '0px auto',
  },
  button1: {
    width: 260,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    margin: '10px 0px',
  },
  button2: {
    width: 230,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    margin: '10px 0px',
  },
  button3: {
    width: 185,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    margin: '10px 0px',
  },
};
