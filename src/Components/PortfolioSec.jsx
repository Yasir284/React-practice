import "./PortfolioSec.css";
import { Card } from "./Card";
import { LineBreak } from "./LineBreak";
import cabin from "../assets/img/portfolio/cabin.png";
import cake from "../assets/img/portfolio/cake.png";
import circus from "../assets/img/portfolio/circus.png";
import game from "../assets/img/portfolio/game.png";
import safe from "../assets/img/portfolio/safe.png";
import submarine from "../assets/img/portfolio/submarine.png";

function PortfolioSec() {
  return (
    <section id="PortfolioSec">
      <h1>PORTFOLIO</h1>

      <LineBreak lineStyle={{ backgroundColor: "#2c3e50" }} />

      <div className="container">
        <div className="row">
          <Card src={cabin} alt="cabinImg" />
          <Card src={cake} alt="cakeImg" />
          <Card src={circus} alt="circusImg" />
          <Card src={game} alt="gameImg" />
          <Card src={safe} alt="safeImg" />
          <Card src={submarine} alt="submarineImg" />
        </div>
      </div>
    </section>
  );
}

export default PortfolioSec;
