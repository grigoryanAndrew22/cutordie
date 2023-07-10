import viewAllBtn from '../../assets/images/viewAllBtn.svg';
import './BottomSection.css';
import { bottomSectionStyles } from './BottomSection.styles';

export const BottomSection = () => {
  return (
    <div className='bottom-section-wrapper'>
      <div
        className='view-all-courses'
        style={bottomSectionStyles.viewAllCourses}
      >
        <button className='view-all-btn' style={bottomSectionStyles.viewAllBtn}>
          <img src={viewAllBtn} alt='btn' />
        </button>
      </div>
      <div className='blot' style={{ height: '260px' }}>
        <img src={require('../../assets/images/blot2.png')} alt='blot' />
      </div>
    </div>
  );
};
