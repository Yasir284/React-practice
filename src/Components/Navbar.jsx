import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="nav d-flex flex-row align-items-center justify-content-between">
      <h2 className="logo fw-bold m-0 p-0">START BOOTSTRAP</h2>

      <ul className="list d-flex flex-row align-items-center list-unstyled">
        <li className="list-items">
          <a className="text-decoration-none fw-bold" href="#PortfolioSec">
            PORTFOLIO
          </a>
        </li>
        <li className="list-items">
          <a className="text-decoration-none fw-bold" href="#AboutSec">
            ABOUT
          </a>
        </li>
        <li className="list-items">
          <a className="text-decoration-none fw-bold" href="#ContactSec">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
