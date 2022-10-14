import React from "react";
import "./App.css";
import {
  AboutSec,
  ContactSec,
  HeroSec,
  Navbar,
  PortfolioSec,
} from "./Components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faDownload } from "@fortawesome/free-solid-svg-icons";
import AvatarSvg from "./assets/img/avataaars.svg";

library.add(faStar, faPlus, faDownload);

function App() {
  return (
    <>
      <Navbar />
      <HeroSec img={AvatarSvg} />
      <PortfolioSec />
      <AboutSec />
      <ContactSec />
    </>
  );
}

export default App;
