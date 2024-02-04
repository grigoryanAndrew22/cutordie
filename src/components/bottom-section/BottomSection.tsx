import viewAllBtn from '../../assets/images/viewAllBtn.png';
import viewAllBtnUA from '../../assets/images/viewAllBtnUA.svg';
import AnimatedButton from '../animated-button/AnimatedButton';
import './BottomSection.css';
import { bottomSectionStyles } from './BottomSection.styles';

export const BottomSection = (props: any) => {
  const btnGenerated = props.language === 'en' ? viewAllBtn : viewAllBtnUA;

  return (
    <div className="bottom-section-wrapper" style={{ marginBottom: '-2px' }}>
      <div className="view-all-courses" style={bottomSectionStyles.viewAllCourses}>
        {/* <button className="view-all-btn" style={bottomSectionStyles.viewAllBtn}>
          <img src={btnGenerated} alt="btn" width={'100%'} />
        </button> */}{' '}
        <AnimatedButton
          url={'/courses'}
          buttonType={'allcourses'}
          text={'View all courses'}
          width={661}
          height={173}
          top={40}
          left={48.5}
          color={'171717'}
          font={'Drum'}
          textClass={'button3'}
        />
        <AnimatedButton
          url={'/'}
          buttonType={'allcourses'}
          text={'Back to main'}
          width={661}
          height={173}
          top={40}
          left={48.5}
          color={'171717'}
          font={'Drum'}
          textClass={'button3'}
        />
      </div>

      <div className="blot" style={{ width: '100%', display: 'flex' }}>
        <img
          src={require('../../assets/images/blot2.webp')}
          alt="blot"
          style={{ width: '-webkit-fill-available' }}
        />
      </div>
    </div>
  );
};
