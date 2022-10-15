import "./Navbar.css";
import { useRef } from "react";

function Navbar(props) {
  const navScroll = useRef(null);
  document.addEventListener("scroll", (e) => {
    if (window.scrollY > 66) {
      console.log("hello");
      navScroll.current.style.padding = "1rem 5rem";
    } else {
      navScroll.current.style.padding = "2rem 5rem";
    }
  });

  return (
    <nav
      className="nav d-flex flex-row align-items-center justify-content-between"
      ref={navScroll}
    >
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
