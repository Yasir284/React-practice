import React from "react";
import "./App.css";
import {
  AboutSec,
  ContactSec,
  FooterSec,
  HeroSec,
  Navbar,
  PortfolioSec,
} from "./Components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faStar,
  faPlus,
  faDownload,
  faGlobe,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AvatarSvg from "./assets/img/avataaars.svg";

library.add(faStar, faPlus, faDownload, fab, faGlobe, faXmark);

function App() {
  return (
    <>
      <Navbar />
      <HeroSec img={AvatarSvg} />
      <PortfolioSec />
      <AboutSec />
      <ContactSec />
      <FooterSec />
    </>
  );
}

export default App;
