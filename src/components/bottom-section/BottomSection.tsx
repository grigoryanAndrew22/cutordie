import viewAllBtn from '../../assets/images/viewAllBtn.png';
import viewAllBtnUA from '../../assets/images/viewAllBtnUA.svg';
import './BottomSection.css';
import { bottomSectionStyles } from './BottomSection.styles';

export const BottomSection = (props: any) => {
  const btnGenerated = props.language === 'en' ? viewAllBtn : viewAllBtnUA;

  return (
    <div className="bottom-section-wrapper" style={{ marginBottom: '-2px' }}>
      <div className="view-all-courses" style={bottomSectionStyles.viewAllCourses}>
        <button className="view-all-btn" style={bottomSectionStyles.viewAllBtn}>
          <img src={btnGenerated} alt="btn" width={'100%'} />
        </button>
      </div>
      <div className="blot" style={{ width: '100%', display: 'flex' }}>
        <img
          src={require('../../assets/images/blot2.png')}
          alt="blot"
          style={{ width: '-webkit-fill-available' }}
        />
      </div>
    </div>
  );
};
