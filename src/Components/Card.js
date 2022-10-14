import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Card.css";

export const Card = (props) => {
  return (
    <div className="text-white position-relative col-12 col-sm-6 col-md-4 p-0">
      <div className="card m-4 border-0">
        <img src={props.src} alt={props.alt} className="portfolioImg rounded" />

        <div className="portfolioLink rounded">
          <a href={props.link}>
            <FontAwesomeIcon icon="plus" className="icon" size="5x" />
          </a>
        </div>
      </div>
    </div>
  );
};
