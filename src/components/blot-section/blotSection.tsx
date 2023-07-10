export const BlotSection = () => {
  return (
    <div className='blot-wrapper'>
      <img
        src={require('../../assets/images/blot.png')}
        alt='blot'
        width={'100%'}
        style={{ boxShadow: '0px -200px 100px #000' }}
      />
      <img
        src={require('../../assets/images/woodenPlate.png')}
        alt='woodPlate'
        width={'100%'}
      />
    </div>
  );
};
