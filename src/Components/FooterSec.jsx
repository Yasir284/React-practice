import "./FooterSec.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FooterSec(props) {
  return (
    <footer id="FooterSec">
      <div className="foooterInfo container">
        <div className="row">
          <div className="col-lg-4 mx-auto mb-5 mb-lg-0">
            <div className="location mx-5">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
          </div>

          <div className="col-lg-4 mx-auto mb-5 mb-lg-0">
            <div className="socialMedia mx-3">
              <h3>AROUND THE WEB</h3>
              <div className="links">
                <a href={props.facebook}>
                  <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                </a>
                <a href={props.twitter}>
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
                <a href={props.linkdin}>
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                </a>
                <a href={props.linkdin}>
                  <FontAwesomeIcon icon="globe" />
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 mx-auto mb-5 mb-lg-0 ">
            <div className="freelance">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href={props.freeLance} className="freelanceLink">
                  Start Bootstrap
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">Copyright © Your Website 2022</div>
    </footer>
  );
}

export default FooterSec;
