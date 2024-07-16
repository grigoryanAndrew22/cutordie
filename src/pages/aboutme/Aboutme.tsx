import { Fragment } from 'react';
import { aboutmeStyles } from './Aboutme.styles';
import './Aboutme.css';

const langs = {
  en: {
    whyme: [
      'WHY ME?',
      'I am an innovative stylist keeping pace with industry trends',
      'My courses offer cutting-edge techniques.',
      'I can provide valuable industry insights',
    ],
    inscrText: [
      `With clippers in one hand and teaching materials in the other, I've made it my mission to elevate the art of barbering. My journey began behind the chair, perfecting cuts and styles for a diverse clientele. Now, I'm equally at home demonstrating techniques to eager students.`,

      `My barbershop doubles as a learning hub, where the buzz of clippers mixes with the excitement of new knowledge. Through hands-on courses, I share insider tips and techniques that have taken years to master. Whether you're here for a sharp new look or to sharpen your own skills, you'll find that in this space, every cut is a lesson and every lesson cuts to the heart of great barbering.`,
    ],
    portfolio: 'MY PORTFOLIO',
  },
  ua: {
    whyme: [
      'ЧОМУ Я?',
      'Я інноваційний стиліст, що йде в ногу з тенденціями',
      'На моїх курсах використовуються найсучасніші техніки',
      'Я можу надати цінну інформацію про індустрію',
    ],
    inscrText: [
      `З машинкою для стрижки в одній руці та навчальними матеріалами в іншій, я поставив собі за мету підняти мистецтво перукарської справи на новий рівень. Мій шлях почався за кріслом, вдосконалюючи стрижки та стилі для різноманітної клієнтури. Тепер я однаково комфортно почуваюся, демонструючи техніки зацікавленим студентам.`,
      `Моя перукарня одночасно є навчальним центром, де гудіння машинок змішується з хвилюванням від нових знань. Через практичні курси я ділюся інсайдерськими порадами та техніками, на опанування яких пішли роки. Незалежно від того, чи ви тут для стильної нової зачіски, чи для вдосконалення власних навичок, ви побачите, що в цьому просторі кожна стрижка - це урок, а кожен урок проникає в саму суть великого перукарського мистецтва.`,
    ],
    portfolio: 'Моє портфоліо',
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
            <p className="whymeP">{generatedLang.whyme[0]}</p>
            <p className="pStyle">{generatedLang.whyme[1]}</p>
            <p className="pStyle">{generatedLang.whyme[2]}</p>
            <p className="pStyle">{generatedLang.whyme[3]}</p>
          </div>
          <img
            className="barber-pfp"
            alt="barber pfp"
            src={require('../../assets/images/pfp.png')}
          />
        </div>
      </div>

      <div className="underpfp" style={aboutmeStyles.inscription}>
        <p style={aboutmeStyles.inscrText}>{generatedLang.inscrText[0]}</p>
        <p style={aboutmeStyles.inscrText}>{generatedLang.inscrText[1]}</p>
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
