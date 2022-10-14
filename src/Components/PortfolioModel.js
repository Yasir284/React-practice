import { LineBreak } from "./LineBreak";
import "./PortfolioModel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PortfolioModel = (props) => {
  function closeBtnClick() {
    props.innerRef.current.classList.add("hide");
  }

  return (
    <div className="portfolioModelDiv hide" ref={props.innerRef}>
      <div className="portfolioModel">
        <div className="xmark">
          <FontAwesomeIcon icon="xmark" size="3x" />
        </div>
        <h1>{props.name}</h1>
        <LineBreak lineStyle={{ backgroundColor: "#2c3e50" }} />
        <img src={props.img} alt="Portfolio" />
        <p className="description">{props.description}</p>
        <button className="closebtn" onClick={closeBtnClick}>
          <FontAwesomeIcon icon="xmark" />
          Close Window
        </button>
      </div>
    </div>
  );
};

PortfolioModel.defaultProps = {
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus expedita consequatur distinctio quo qui tenetur voluptas optio? Dolorum ipsam voluptas pariatur nostrum magnam, exercitationem in, magni sed officiis expedita necessitatibus laborum odio. Vero doloremque ea repudiandae. Fugiat iure accusamus, doloremque, omnis iste non minus dolor qui quos eaque facilis.",
};
