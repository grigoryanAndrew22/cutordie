import corner from '../../assets/images/corner.svg';

export const HaircutPhoto = (props: any) => {
  return (
    <div style={{ position: 'relative' }}>
      <img src={corner} style={{ position: 'absolute' }} />
      <img src={require(props.url)} />
    </div>
  );
};
