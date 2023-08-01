import { Card } from '../card/Card';
import buyNowbtn from '../../assets/images/buyNowbtn.svg';
import buyNowbtnUA from '../../assets/images/buyNowbtnUA.svg';
import dividerLeft from '../../assets/images/dividerLeft.svg';
import dividerRight from '../../assets/images/dividerRight.svg';
import { Fragment } from 'react';
import { offerStyles } from './Offer.styles';
import './Offer.css';

const offerTextLangs = {
  en: {
    title: '"All in" pack',
    features: [
      'basic haircutting course',
      'precision cuts',
      'creative haircutting workshop',
    ],
    buynow: buyNowbtn,
  },
  ua: {
    title: 'ВСЕ В ОДНОМУ',
    features: [
      'курс по стрижці для початківців',
      'акуратні стрижки',
      'майстерня креативних стрижок',
    ],
    buynow: buyNowbtnUA,
  },
};

export const Offer = (props: { flexDirection: any; language: any }) => {
  const offerGenerated =
    props.language === 'en' ? offerTextLangs.en : offerTextLangs.ua;

  return (
    <Fragment>
      <div className='offer-wrapper' style={offerStyles.wrapper(props)}>
        <div className='cards' style={{ position: 'relative' }}>
          <Card
            position={'absolute'}
            transform={'rotate(-25deg)'}
            top={0}
            left={-100}
            language={props.language}
          />
          <Card
            position={'relative'}
            transform={'none'}
            top={0}
            left={0}
            language={props.language}
          />
          <Card
            position={'absolute'}
            transform={'rotate(25deg)'}
            top={30}
            left={100}
            language={props.language}
          />
        </div>
        <div className='description'>
          <h3 style={offerStyles.title}>{offerGenerated.title}</h3>
          <div style={offerStyles.description}>
            <p style={{ margin: 0 }}>- {offerGenerated.features[0]}</p>
            <p style={{ margin: 0 }}>- {offerGenerated.features[1]}</p>
            <p style={{ margin: 0 }}>- {offerGenerated.features[2]}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 40 }}>
            <button className='buy-btn' style={offerStyles.buyBtn}>
              <img
                src={offerGenerated.buynow}
                alt='btn'
                width={'100%'}
                height={'100%'}
              />
            </button>
            <span style={offerStyles.price}>12000 $</span>
          </div>
        </div>
      </div>
      <div className='divider'>
        <img
          src={props.flexDirection === 'row' ? dividerLeft : dividerRight}
          alt='d'
          width={'100%'}
        />
      </div>
    </Fragment>
  );
};
