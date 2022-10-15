import { LineBreak } from "./LineBreak";
import "./PortfolioModel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PortfolioModel = (props) => {
  return props.trigger ? (
    <div className="portfolioModelDiv">
      <div className="portfolioModel">
        <div className="xmark" onClick={() => props.closePopup(false)}>
          <FontAwesomeIcon icon="xmark" size="2x" />
        </div>
        <h2 className="projectName">{props.name}</h2>
        <LineBreak lineStyle={{ backgroundColor: "#2c3e50" }} />
        <img src={props.img} alt="Portfolio" />
        <p className="description">{props.description}</p>
        <button className="closebtn" onClick={() => props.closePopup(false)}>
          <FontAwesomeIcon icon="xmark" />
          Close Window
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

PortfolioModel.defaultProps = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus expedita consequatur distinctio quo qui tenetur voluptas optio? Dolorum ipsam voluptas pariatur nostrum magnam, exercitationem in, magni sed officiis.",
};
