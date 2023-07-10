import { Card } from '../card/Card';
import buyNowbtn from '../../assets/images/buyNowbtn.svg';
import dividerLeft from '../../assets/images/dividerLeft.svg';
import dividerRight from '../../assets/images/dividerRight.svg';
import { Fragment } from 'react';
import { offerStyles } from './Offer.styles';
import './Offer.css';

export const Offer = (props: { flexDirection: any }) => {
  return (
    <Fragment>
      <div className='offer-wrapper' style={offerStyles.wrapper(props)}>
        <div className='cards' style={{ position: 'relative' }}>
          <Card
            position={'absolute'}
            transform={'rotate(-25deg)'}
            top={0}
            left={-100}
          />
          <Card position={'relative'} transform={'none'} top={0} left={0} />
          <Card
            position={'absolute'}
            transform={'rotate(25deg)'}
            top={30}
            left={100}
          />
        </div>
        <div className='description'>
          <h3 style={offerStyles.title}>"All in" pack</h3>
          <div style={offerStyles.description}>
            <p style={{ margin: 0 }}>- basic haircutting course</p>
            <p style={{ margin: 0 }}>- precision cuts</p>
            <p style={{ margin: 0 }}>- creative haircutting workshop</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 40 }}>
            <button className='buy-btn' style={offerStyles.buyBtn}>
              <img src={buyNowbtn} alt='btn' width={'100%'} height={'100%'} />
            </button>
            <span style={offerStyles.price}>12 $</span>
          </div>
        </div>
      </div>
      <div className='divider'>
        <img
          src={props.flexDirection === 'row' ? dividerLeft : dividerRight}
          alt='d'
        />
      </div>
    </Fragment>
  );
};
