import "./Navbar.css";
import { useRef } from "react";

function Navbar(props) {
  const navScroll = useRef();
  const navRef = useRef();
  const hamburgerRef = useRef();
  document.addEventListener("scroll", () => {
    if (window.scrollY > 66) {
      navScroll.current.style.padding = "1rem 5rem";
    } else {
      navScroll.current.style.padding = "2rem 5rem";
    }
  });

  function navSlide(e) {
    navRef.current.classList.toggle("showList");
    hamburgerRef.current.classList.toggle("changeHamburger");
    e.preventDefault();
  }

  return (
    <nav className="nav" ref={navScroll}>
      <h2 className="logo fw-bold m-0 p-0">START BOOTSTRAP</h2>

      <div className="ham" onClick={navSlide}>
        <div className="hamburger" ref={hamburgerRef}></div>
      </div>

      <ul className="list" ref={navRef}>
        <li className="list-items">
          <a href="#PortfolioSec">PORTFOLIO</a>
        </li>
        <li className="list-items">
          <a href="#AboutSec">ABOUT</a>
        </li>
        <li className="list-items">
          <a href="#ContactSec">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
