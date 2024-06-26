import button1EN from '../../assets/images/button1.svg';
import button2EN from '../../assets/images/button2.svg';
import button3EN from '../../assets/images/button3.svg';
import button1UA from '../../assets/images/button1UA.svg';
import button2UA from '../../assets/images/button2UA.svg';
import button3UA from '../../assets/images/button3UA.svg';

import AnimatedButton from '../animated-button/AnimatedButton';

import './TopSection.css';
import { TopSectionStyles } from './TopSection.styles';

const topSectionLangs = {
  en: {
    button1: 'About me',
    button2: 'Courses',
    button3: 'Sign in',
  },
  ua: {
    button1: 'Про мене',
    button2: 'Курси',
    button3: 'Увійти',
  },
};

export const TopSection = (props: any) => {
  const topSectionLangGenerated = props.language === 'en' ? topSectionLangs.en : topSectionLangs.ua;

  return (
    <div className="top-section" style={TopSectionStyles.topSection}>
      <div className="buttonsWrapper">
        <AnimatedButton
          url={'/aboutme'}
          buttonType={'aboutme'}
          text={topSectionLangGenerated.button1}
          width={303}
          height={113}
          top={39}
          left={48}
          color={'e8e8e8'}
          font={'Drum'}
          textClass={'button1'}
        />
        <AnimatedButton
          url={'/courses'}
          buttonType={'courses'}
          text={topSectionLangGenerated.button2}
          width={265}
          height={105}
          top={39}
          left={48}
          color={'e8e8e8'}
          font={'Drum'}
          textClass={'button1'}
        />
        <button className="btn">
          <AnimatedButton
            url={''}
            buttonType={'signin'}
            text={topSectionLangGenerated.button3}
            width={213}
            height={103}
            top={39}
            left={50}
            color={'e8e8e8'}
            font={'Drum'}
            textClass={'button1'}
          />
        </button>
      </div>
    </div>
  );
};
