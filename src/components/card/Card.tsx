import { cardStyles } from './Card.styles';

const cardLangs = {
  en: {
    title: 'Precision Cuts',
    description:
      'Discover the artistic side of haircutting and learn how to integrate visual elements, such as line, shape, and form, into your designs',
  },
  ua: {
    title: 'Акуратні Стрижки',
    description:
      'Відкрийте для себе художню сторону стрижки та навчіться інтегрувати візуальні елементи, такі як лінія та форма, у свій дизайн',
  },
};

export const Card = (props: {
  position: any;
  transform: any;
  top: any;
  left: any;
  language: any;
}) => {
  const cardGenerated = props.language === 'en' ? cardLangs.en : cardLangs.ua;

  return (
    <div className='card-wrapper' style={cardStyles.cardWrapper(props)}>
      <div className='img' style={cardStyles.image}>
        <img
          src={require('../../assets/images/haircut.png')}
          width={'100%'}
          height={'100%'}
        />
        <p style={cardStyles.title}>{cardGenerated.title}</p>
      </div>
      <div className='description' style={cardStyles.description}>
        <p>{cardGenerated.description}</p>
      </div>
    </div>
  );
};
