export const BlotSection = (props: any) => {
  const offersLangGenerated =
    props.language === 'en'
      ? require('../../assets/images/woodenPlate.png')
      : require('../../assets/images/woodenPlateUA.png');

  return (
    <div className='blot-wrapper' style={{ marginBottom: '90px' }}>
      <img
        src={require('../../assets/images/blot.png')}
        alt='blot'
        width={'100%'}
        style={{ boxShadow: '0px -200px 100px #000' }}
      />
      <img src={offersLangGenerated} alt='woodPlate' width={'100%'} />
    </div>
  );
};
