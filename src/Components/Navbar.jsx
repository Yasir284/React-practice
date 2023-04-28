import "./Navbar.css";
import { useEffect, useRef } from "react";

function Navbar(props) {
  const navRef = useRef();
  const hamburgerRef = useRef();

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      function (entries) {
        if (!entries[0].isIntersecting && window.innerWidth > 675) {
          document.querySelector("nav").classList.add("hide");
        } else {
          document.querySelector("nav").classList.remove("hide");
        }
      },
      { root: null, threshold: 0.4 }
    );

    const sectionOne = document.querySelector("#HeroSec");
    sectionObserver.observe(sectionOne);
  }, []);

  function navSlide(e) {
    navRef.current.classList.toggle("showList");
    hamburgerRef.current.classList.toggle("changeHamburger");
    e.preventDefault();
  }

  return (
    <nav className="nav">
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
