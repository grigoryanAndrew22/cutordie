import cardBG from '../../assets/images/cardBG.png';
import { cardStyles } from './Card.styles';

export const Card = (props: {
  position: any;
  transform: any;
  top: any;
  left: any;
}) => {
  return (
    <div className='card-wrapper' style={cardStyles.cardWrapper(props)}>
      <div className='img' style={cardStyles.image}>
        <img
          src={require('../../assets/images/haircut.png')}
          width={'100%'}
          height={'100%'}
        />
        <p style={cardStyles.title}>Precision Cuts</p>
      </div>
      <div className='description' style={cardStyles.description}>
        <p>
          Discover the artistic side of haircutting and learn how to integrate
          visual elements, such as line, shape, and form, into your designs
        </p>
      </div>
    </div>
  );
};
