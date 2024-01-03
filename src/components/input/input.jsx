import './animatedButtonStyle.css';

export const AnimatedButton = ({
  url,
  buttonType,
  width,
  height,
  text,
  top,
  left,
  color,
  font,
  fontSize,
}) => {
  return (
    <a className="btnContainer" href={url} style={{ width: `${width}px`, height: `${height}px` }}>
      <div className="btnStrokes">{buttonTypes[buttonType]}</div>
      <div className="strokeBtnText" style={{ top: `${top}%`, left: `${left}%` }}>
        <p style={{ color: `#${color}`, fontFamily: `${font}`, fontSize: `${fontSize}px` }}>
          {text}
        </p>
      </div>
    </a>
  );
};

export default AnimatedButton;
// {buttonTypes[buttonType]}
