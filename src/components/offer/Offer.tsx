import { Card } from '../card/Card';
import buyNowbtn from '../../assets/images/buyNowbtn.svg';
import buyNowbtnUA from '../../assets/images/buyNowbtnUA.svg';
import dividerLeft from '../../assets/images/dividerLeft.png';
import dividerRight from '../../assets/images/dividerRight.png';
import uahSymbol from '../../assets/images/uahSymbol.png';
import uahSymbolGray from '../../assets/images/uahSymbolGray.png';
import { Fragment } from 'react';
import { offerStyles } from './Offer.styles';
import './Offer.css';
import { offerMobileStyles } from './OfferMobile.styles';
import './OfferMobile.css';
import AnimatedButton from '../animated-button/AnimatedButton';

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

const offerCurrencies = {
  usd: ['30$', '60$'],
  uah: [`1099`, `2199`],
  eur: ['27€', '54€'],
};

export const Offer = (props: any) => {
  const offerGenerated =
    props.language === 'en' ? offerTextLangs.en : offerTextLangs.ua;

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
      <Fragment>
        <div className='offer-wrapper' style={offerStyles.wrapper(props)}>
          <div
            className='cards'
            style={{
              position: 'relative',
              marginTop: '-104px',
              marginLeft:
                props.flexDirection === 'row-reverse' ? '0px' : '40px',
              marginRight:
                props.flexDirection === 'row-reverse' ? '40px' : '0px',
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
            <p style={offerStyles.discount}>-50%</p>
            <h3 style={offerStyles.title} className='title'>
              {offerGenerated.title}
            </h3>
            <ul style={offerStyles.description} className='description'>
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
            <div
              style={{ display: 'flex', alignItems: 'center', marginTop: 40 }}
            >
              <AnimatedButton
                url={'/cutordie'}
                buttonType={'buynow'}
                text={'Buy now'}
                width={363}
                height={142}
                top={57}
                left={49}
                color={'363636'}
                font={'Besom'}
                textClass={'button2'}
              />
              <span style={offerStyles.price} className='price'>
                {currencyGenerated[0]}
                <div>
                  {currencyGenerated === offerCurrencies.uah && (
                    <img
                      alt=''
                      width={72}
                      height={64.8}
                      src={uahSymbol}
                      className='uah-img'
                    />
                  )}
                </div>
              </span>
              <span style={offerStyles.price} className='prev-price'>
                {currencyGenerated[1]}
                <div>
                  {currencyGenerated === offerCurrencies.uah && (
                    <img
                      alt=''
                      width={43}
                      height={44}
                      src={uahSymbolGray}
                      className='uah-img'
                    />
                  )}
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className='divider' style={{ margin: '60px 0px' }}>
          <img
            src={props.flexDirection === 'row' ? dividerLeft : dividerRight}
            alt='d'
            width={'100%'}
          />
        </div>
      </Fragment>
      <Fragment>
        <div
          className='offer-wrapper-mobile'
          style={offerMobileStyles.wrapper()}
        >
          <div
            className='description-wrapper-mob'
            style={offerMobileStyles.descriptionWrap}
          >
            <p style={offerMobileStyles.discount}>-50%</p>
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
            className='offer-cards'
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
          <div style={offerMobileStyles.buyBtnWrap}>
            <button
              className='buy-btn card_btn'
              style={offerMobileStyles.buyBtn}
            >
              <img
                src={offerGenerated.buynow}
                alt='btn'
                width={'97%'}
                height={'100%'}
              />
            </button>
            {/* <AnimatedButton
              url={'/cutordie'}
              buttonType={'buynow'}
              text={'Buy now'}
              width={170}
              height={110}
              top={57}
              left={49}
              color={'363636'}
              font={'Besom'}
              textClass={'button2'}
            /> */}
            <div className='card_pricewrap' style={offerMobileStyles.priceWrap}>
              <span style={offerMobileStyles.price} className='price'>
                {currencyGenerated[0]}
                {currencyGenerated === offerCurrencies.uah && (
                  <img
                    className='card_img'
                    alt=''
                    width={36}
                    height={50}
                    src={uahSymbol}
                    style={{ paddingLeft: '3px', paddingTop: '13.5px' }}
                  />
                )}
              </span>
              <span
                style={offerMobileStyles.price}
                className='prev-price-mobile'
              >
                {currencyGenerated[1]}
                {currencyGenerated === offerCurrencies.uah && (
                  <img
                    alt=''
                    width={29}
                    src={uahSymbolGray}
                    style={{ paddingLeft: '2px' }}
                  />
                )}
              </span>
            </div>
          </div>
        </div>
        <div
          className='divider-mobile'
          style={{ width: '100%', margin: '55px 0px' }}
        >
          <img
            src={props.divider}
            alt='d'
            width={'100%'}
            // style={{ float: props.divider === dividerRight ? 'right' : 'left' }}
          />
        </div>
      </Fragment>
    </Fragment>
  );
};
