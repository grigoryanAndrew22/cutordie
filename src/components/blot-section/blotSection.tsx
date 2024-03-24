import './blotSection.css';

export const BlotSection = (props: any) => {
  const offersLangGenerated =
    props.language === 'en'
      ? require('../../assets/images/woodenPlate.webp')
      : require('../../assets/images/woodenPlateUA.webp');

  return (
    <div className='blot-wrapper' style={{ marginBottom: '90px' }}>
      <img
        src={require('../../assets/images/blot.webp')}
        alt='blot'
        width={'100%'}
        style={{ boxShadow: '0px -200px 100px #000' }}
      />
      <img
        className='woodPlate'
        src={offersLangGenerated}
        alt='woodPlate'
        width={'100%'}
      />
    </div>
  );
};
