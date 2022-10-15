import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Card.css";
import { PortfolioModel } from "./PortfolioModel";

export const Card = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <>
      <div className="text-white position-relative col-12 col-sm-6 col-md-4 p-0">
        <div className="card m-4 border-0">
          <img
            src={props.src}
            alt={props.alt}
            className="portfolioImg rounded"
          />

          <button
            className="portfolioLink rounded"
            onClick={() => setButtonPopup(true)}
          >
            <a href={props.link}>
              <FontAwesomeIcon icon="plus" className="icon" size="5x" />
            </a>
          </button>
        </div>
      </div>

      <PortfolioModel
        trigger={buttonPopup}
        closePopup={setButtonPopup}
        img={props.src}
        name={props.name}
      />
    </>
  );
};
