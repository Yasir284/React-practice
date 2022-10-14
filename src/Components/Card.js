import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import "./Card.css";
import { PortfolioModel } from "./PortfolioModel";

export const Card = (props) => {
  const portfolioBtn = useRef();
  const pModel = useRef();
  function show() {
    portfolioBtn.current.classList.toggle("active");
    pModel.current.classList.remove("hide");
  }

  // portfolioCloseRef.current.click = () => {
  //   console.log("incide hide");
  //   show();
  // };

  // portfolioCloseRef.current.addEventListner("click", () => {
  //   pModel.current.classList.add("hide");
  // });

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
            ref={portfolioBtn}
            className="portfolioLink rounded"
            onClick={show}
          >
            <a href={props.link}>
              <FontAwesomeIcon icon="plus" className="icon" size="5x" />
            </a>
          </button>
        </div>
      </div>
      <PortfolioModel innerRef={pModel} img={props.src} name={props.name} />
    </>
  );
};
