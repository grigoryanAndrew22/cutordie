export const signInStyles = {
  signinWrapper: {
    position: 'fixed' as 'fixed',
    display: 'flex',
    width: '500px',
    flexDirection: 'column' as 'column',
    zIndex: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    top: 'calc(50% - 247.5px)',
  },
  signInTitle: {
    position: 'relative' as 'relative',
    textAlign: 'center' as 'center',
    width: '100%',
    marginBottom: '12px',
    fontSize: '27px',
    color: '#444444',
    fontFamily: 'Drum',
  },
  closeButton: {
    background: 'transparent',
    color: '#444444',
    border: 'none',
    position: 'absolute' as 'absolute',
    right: '25px',
    top: '7px',
    fontFamily: 'Drum',
    fontSize: '40px',
    cursor: 'pointer',
  },
};
