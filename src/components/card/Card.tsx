import { cardStyles } from './Card.styles';
import '../card/Card.css';
import coursesJson from '../../assets/courses.json';

export const Card = (props: {
  position: any;
  transform: any;
  top: any;
  left: any;
  language: any;
  index: any;
  cover: any;
  courseId: any;
}) => {
  // const cardGenerated = props.language === 'en' ? cardLangs.en : cardLangs.ua;

  const course = coursesJson.find((course: any) => {
    return course._id == props.courseId;
  });

  return (
    <div className={`card-wrapper card-${props.index}`} style={cardStyles.cardWrapper(props)}>
      <div className="img" style={cardStyles.image}>
        <img
          className="offer-preview-card"
          src={require(`../../assets/images/courseCovers/${props.cover}`)}
          width="100%"
          alt="course"
        />
        <p className="card_heading" style={cardStyles.title}>
          {props.language === 'en' ? course.en.name : course.ua.name}
        </p>
      </div>
      {/* <div className="description card_description" style={cardStyles.description}>
        <p> {props.language === 'en' ? course.en.description : course.ua.description}</p>
      </div> */}
    </div>
  );
};
