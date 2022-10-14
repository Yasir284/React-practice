import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const LineBreak = (props) => {
  return (
    <div className="star d-flex flex-row justify-content-center align-items-center gap-4">
      <div className="line" style={props.lineStyle}></div>
      <FontAwesomeIcon icon="star" size="2x" />
      <div className="line" style={props.lineStyle}></div>
    </div>
  );
};
