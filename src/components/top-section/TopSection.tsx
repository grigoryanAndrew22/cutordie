import button1EN from '../../assets/images/button1.svg';
import button2EN from '../../assets/images/button2.svg';
import button3EN from '../../assets/images/button3.svg';
import button1UA from '../../assets/images/button1UA.svg';
import button2UA from '../../assets/images/button2UA.svg';
import button3UA from '../../assets/images/button3UA.svg';

import './TopSection.css';
import { TopSectionStyles } from './TopSection.styles';

const topSectionLangs = {
  en: {
    button1: button1EN,
    button2: button2EN,
    button3: button3EN,
  },
  ua: {
    button1: button1UA,
    button2: button2UA,
    button3: button3UA,
  },
};

export const TopSection = (props: any) => {
  const topSectionLangGenerated =
    props.language === 'en' ? topSectionLangs.en : topSectionLangs.ua;

  return (
    <div className='top-section' style={TopSectionStyles.topSection}>
      <div style={TopSectionStyles.buttonsWrapper}>
        <button className='btn' style={TopSectionStyles.button1}>
          <img src={topSectionLangGenerated.button1} alt='btn' width={'100%'} />
        </button>
        <button className='btn' style={TopSectionStyles.button2}>
          <img src={topSectionLangGenerated.button2} alt='btn' width={'100%'} />
        </button>
        <button className='btn' style={TopSectionStyles.button3}>
          <img src={topSectionLangGenerated.button3} alt='btn' width={'100%'} />
        </button>
      </div>
    </div>
  );
};
