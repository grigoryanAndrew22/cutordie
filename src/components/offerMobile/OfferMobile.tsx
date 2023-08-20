import { Card } from '../card/Card';
import { offerMobileStyles } from './OfferMobile.styles';
import buyNowbtn from '../../assets/images/buyNowbtn.svg';
import buyNowbtnUA from '../../assets/images/buyNowbtnUA.svg';
import dividerRight from '../../assets/images/dividerRight.svg';
import uahSymbol from '../../assets/images/uahSymbol.svg';
import { Fragment } from 'react';
import '../offerMobile/OfferMobile.css';

const offerMobTextLangs = {
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

const offerCurrencies = {
  usd: ['30 $', '60 $'],
  uah: [`1099`, `2199`],
  eur: ['27 €', '54 €'],
};

export const OfferMobile = (props: any) => {
  const offerGenerated =
    props.language === 'en' ? offerMobTextLangs.en : offerMobTextLangs.ua;

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
      <div className='offer-wrapper-mobile' style={offerMobileStyles.wrapper()}>
        <div
          className='description-wrapper-mob'
          style={{
            alignSelf: 'start',
            fontFamily: 'Drum',
            position: 'relative',
          }}
        >
          <p
            style={{
              position: 'absolute',
              fontFamily: 'Hey October',
              fontSize: '38px',
              color: '#900000',
              top: '-31px',
              right: '11%',
              margin: '0px',
            }}
          >
            -50%
          </p>
          <h3 style={offerMobileStyles.title} className='title'>
            {offerGenerated.title}
          </h3>
          <div style={offerMobileStyles.description} className='description'>
            <p style={{ margin: 0 }}>- {offerGenerated.features[0]}</p>
            <p style={{ margin: 0 }}>- {offerGenerated.features[1]}</p>
            <p style={{ margin: 0 }}>- {offerGenerated.features[2]}</p>
          </div>
        </div>
        <div
          className='cards'
          style={{ position: 'relative', margin: '54px 0px' }}
        >
          <Card
            position={'absolute'}
            transform={'rotate(-25deg)'}
            top={0}
            left={-100}
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
            transform={'rotate(25deg)'}
            top={30}
            left={100}
            language={props.language}
            index={3}
          />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 40,
            alignSelf: 'start',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <button className='buy-btn' style={offerMobileStyles.buyBtn}>
            <img
              src={offerGenerated.buynow}
              alt='btn'
              width={'97%'}
              height={'100%'}
            />
          </button>
          <div
            style={{
              position: 'relative',
              whiteSpace: 'nowrap',
              width: 'calc(100% - 235px)',
            }}
          >
            <span style={offerMobileStyles.price} className='price'>
              {currencyGenerated[0]}
              {currencyGenerated === offerCurrencies.uah && (
                <img
                  width={36}
                  src={uahSymbol}
                  style={{ paddingLeft: '3px' }}
                />
              )}
            </span>
            <span style={offerMobileStyles.price} className='prev-price-mobile'>
              {currencyGenerated[1]}
              {currencyGenerated === offerCurrencies.uah && (
                <img
                  width={33}
                  src={uahSymbol}
                  style={{ paddingLeft: '2px' }}
                />
              )}
            </span>
          </div>
        </div>
      </div>
      <div
        className='divider-mobile'
        style={{ width: '100%', margin: '45px 0px' }}
      >
        <img
          src={props.divider}
          alt='d'
          width={'100%'}
          // style={{ float: props.divider === dividerRight ? 'right' : 'left' }}
        />
      </div>
    </Fragment>
  );
};
