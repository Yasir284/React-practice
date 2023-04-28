import "./HeroSec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSec(props) {
  return (
    <section
      id="HeroSec"
      className="d-flex flex-column justify-content-center align-items-center gap-4 min-vh-100"
    >
      <img className="avatarImg" src={props.img} alt="avatarImg" />

      <h1>START BOOTSTRAP</h1>
      <div className="star d-flex flex-row justify-content-center align-items-center gap-4">
        <div className="line"></div>
        <FontAwesomeIcon icon="star" size="2x" />
        <div className="line"></div>
      </div>
      <p>Graphic Artist - Web Designer - Illustrator</p>
    </section>
  );
}

export default HeroSec;
