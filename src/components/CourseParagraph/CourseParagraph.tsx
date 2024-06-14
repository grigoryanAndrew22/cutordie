export const CourseParagraph = (props: any) => {
  return (
    <div
      className='course-descr-section'
      style={{
        display: 'flex',
        marginTop: '100px',
        flexDirection: props.reverse ? 'row-reverse' : 'row',
        justifyContent: 'space-between',
      }}
    >
      <p
        style={{
          width: '80%',
          margin: 0,
          fontFamily: 'Bitter',
          fontSize: '24px',
          color: '#232323',
          paddingRight: props.reverse ? '0px' : '60px',
          paddingLeft: props.reverse ? '60px' : '0px',
          fontWeight: 600,
        }}
      >
        {props.text}
      </p>
      <img
        alt=''
        className='course-img'
        src={require('../../assets/images/coursePrev.png')}
      />
    </div>
  );
};
