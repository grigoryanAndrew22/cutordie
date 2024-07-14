import { Fragment } from 'react';
import { aboutmeStyles } from './Aboutme.styles';
import './Aboutme.css';

const langs = {
  en: {
    whyme: [
      'WHY ME?',
      '-Expert Styling, Tailored to You',
      '-Transform Your Look with Our Skilled Hands',
      '-Where Skill Meets Style and Satisfaction',
    ],
    inscrText: `Building a rapport with clients can be crucial. People often choose
    barbers they feel comfortable with and with whom they can have a
    friendly relationship. If you're personable and make your clients feel
    at ease, they may prefer you as their barber.`,
    portfolio: 'MY PORTFOLIO',
  },
  ua: {
    whyme: [
      'ЧОМУ Я?',
      '-Експертна укладка, розроблена спеціально для вас',
      '-Перетворіть свій образ за допомогою наших умілих рук',
      '-Майстерність поєднується зі стилем та задоволенням',
    ],
    inscrText: `Налагодження взаєморозуміння з клієнтами може мати вирішальне значення. Люди часто обирають перукарів, з якими їм комфортно і з якими вони можуть бути
    дружні стосунки. Якщо ви милосердні і своїм клієнтам почуваєтеся невимушено, вони можуть віддати перевагу вам як перукаря.`,
    portfolio: 'МОЄ ПОРТФОЛІО',
  },
};

export const Aboutme = (props: any) => {
  const row = [1, 2, 3, 4, 5, 6, 7];

  const generatedLang = props.language === 'en' ? langs.en : langs.ua;

  return (
    <Fragment>
      <div className="barber-profile-wrapper" style={aboutmeStyles.barderProfileWrapper}>
        <div style={aboutmeStyles.firstSection}>
          <div className="whyme" style={aboutmeStyles.whyme}>
            <p style={aboutmeStyles.whymeP}>{generatedLang.whyme[0]}</p>
            <p style={aboutmeStyles.pStyle}>{generatedLang.whyme[1]}</p>
            <p style={aboutmeStyles.pStyle}>{generatedLang.whyme[2]}</p>
            <p style={aboutmeStyles.pStyle}>{generatedLang.whyme[3]}</p>
          </div>
          <img
            className="barber-pfp"
            alt="barber pfp"
            src={require('../../assets/images/barberpfp.webp')}
          />
        </div>
      </div>

      <div className="underpfp" style={aboutmeStyles.inscription}>
        <p style={aboutmeStyles.inscrText}>{generatedLang.inscrText}</p>
      </div>

      <div className="portfolio" style={aboutmeStyles.portfolioWrap}>
        <p style={aboutmeStyles.portfolioTitle}>{generatedLang.portfolio}</p>
        <div className="photos_row1" style={aboutmeStyles.photosRow}>
          {row.map((i: any) => (
            <img
              alt=""
              src={require(`../../assets/images/haircutpic${i}.png`)}
              style={{ marginBottom: '100px' }}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};
