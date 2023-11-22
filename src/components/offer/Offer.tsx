import { Card } from '../card/Card';
import buyNowbtn from '../../assets/images/buyNowbtn.svg';
import buyNowbtnUA from '../../assets/images/buyNowbtnUA.svg';
import dividerLeft from '../../assets/images/dividerLeft.svg';
import dividerRight from '../../assets/images/dividerRight.svg';
import uahSymbol from '../../assets/images/uahSymbol.svg';
import uahSymbolGray from '../../assets/images/uahSymbolGray.svg';
import { Fragment } from 'react';
import { offerStyles } from './Offer.styles';
import './Offer.css';

const offerTextLangs = {
  en: {
    title: '"All in" pack',
    features: ['basic haircutting course', 'precision cuts', 'creative haircutting workshop'],
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

const offerCurrencies = {
  usd: ['30$', '60$'],
  uah: [`1099`, `2199`],
  eur: ['27€', '54€'],
};

export const Offer = (props: { flexDirection: any; language: any; currency: any; index: any }) => {
  const offerGenerated = props.language === 'en' ? offerTextLangs.en : offerTextLangs.ua;

  let currencyGenerated;
  if (props.currency === 'usd') {
    currencyGenerated = offerCurrencies.usd;
  } else if (props.currency === 'uah') {
    currencyGenerated = offerCurrencies.uah;
  } else {
    currencyGenerated = offerCurrencies.eur;
  }

  return (
    <Fragment>
      <div className="offer-wrapper" style={offerStyles.wrapper(props)}>
        <div
          className="cards"
          style={{
            position: 'relative',
            marginTop: '-104px',
            marginLeft: props.flexDirection === 'row-reverse' ? '0px' : '40px',
            marginRight: props.flexDirection === 'row-reverse' ? '40px' : '0px',
          }}
        >
          <Card
            position={'absolute'}
            transform={'rotate(-21deg)'}
            top={27}
            left={-160}
            language={props.language}
            index={1}
          />
          <Card
            position={'relative'}
            transform={'none'}
            top={0}
            left={0}
            language={props.language}
            index={2}
          />
          <Card
            position={'absolute'}
            transform={'rotate(21deg)'}
            top={41}
            left={167}
            language={props.language}
            index={3}
          />
        </div>
        <div
          className={`description-wrapper descr-${props.index}`}
          style={{ position: 'relative', marginRight: '-100px' }}
        >
          <p
            style={{
              position: 'absolute',
              fontFamily: 'Hey October',
              fontSize: '55px',
              color: '#900000',
              top: '-35px',
              right: '20%',
              margin: '0px',
            }}
          >
            -50%
          </p>
          <h3 style={offerStyles.title} className="title">
            {offerGenerated.title}
          </h3>
          <ul style={offerStyles.description} className="description">
            <li style={{ margin: 0, height: '56px', paddingLeft: '1rem' }}>
              {' '}
              {offerGenerated.features[0]}
            </li>
            <li style={{ margin: 0, height: '56px', paddingLeft: '1rem' }}>
              {' '}
              {offerGenerated.features[1]}
            </li>
            <li style={{ margin: 0, height: '56px', paddingLeft: '1rem' }}>
              {' '}
              {offerGenerated.features[2]}
            </li>
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 40 }}>
            <button className="buy-btn" style={offerStyles.buyBtn}>
              <img src={offerGenerated.buynow} alt="btn" width={'100%'} height={'100%'} />
            </button>
            <span style={offerStyles.price} className="price">
              {currencyGenerated[0]}
              {currencyGenerated === offerCurrencies.uah && (
                <img width={72} src={uahSymbol} style={{ paddingLeft: '2px' }} />
              )}
            </span>
            <span style={offerStyles.price} className="prev-price">
              {currencyGenerated[1]}
              {currencyGenerated === offerCurrencies.uah && (
                <img width={43} src={uahSymbolGray} style={{ paddingLeft: '2px' }} />
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="divider" style={{ margin: '60px 0px' }}>
        <img
          src={props.flexDirection === 'row' ? dividerLeft : dividerRight}
          alt="d"
          width={'100%'}
        />
      </div>
    </Fragment>
  );
};
