import "./AboutSec.css";
import { LineBreak } from "./LineBreak";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "../../node_modules/bootstrap/scss/vendor/_variable";
function AboutSec() {
  return (
    <section id="AboutSec" className="min-vh-100">
      <h1>ABOUT</h1>
      <LineBreak />
      <div className="aboutInfo fs-5 d-flex flex-row justify-content-center align-items-center">
        <p>
          Freelancer is a free bootstrap theme created by Start Bootstrap. The
          download includes the complete source files including HTML, CSS, and
          JavaScript as well as optional SASS stylesheets for easy
          customization.
        </p>

        <p>
          You can create your own custom avatar for the masthead, change the
          icon in the dividers, and add your email address to the contact form
          to make it fully functional!
        </p>
      </div>

      <button className="downloadBtn">
        <FontAwesomeIcon icon="download" style={{ marginRight: "1rem" }} />
        Free Download
      </button>
    </section>
  );
}

export default AboutSec;
