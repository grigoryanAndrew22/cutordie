import button1 from '../../assets/images/button1.svg';
import button2 from '../../assets/images/button2.svg';
import button3 from '../../assets/images/button3.svg';
import './TopSection.css';
import { TopSectionStyles } from './TopSection.styles';

export const TopSection = () => {
  return (
    <div className='top-section' style={TopSectionStyles.topSection}>
      <div style={TopSectionStyles.buttonsWrapper}>
        <button className='btn' style={TopSectionStyles.button1}>
          <img src={button1} alt='btn' width={'100%'} />
        </button>
        <button className='btn' style={TopSectionStyles.button2}>
          <img src={button2} alt='btn' width={'100%'} />
        </button>
        <button className='btn' style={TopSectionStyles.button3}>
          <img src={button3} alt='btn' width={'100%'} />
        </button>
      </div>
    </div>
  );
};
