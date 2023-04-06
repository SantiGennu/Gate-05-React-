import "./Hero.css";
import logo from "../../assets/gate 05.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-text">
          <div className="text-icon">
            {" "}
            FLY CHEAPER{" "}
            <span className="symbol material-symbols-outlined">savings</span>
          </div>
          <br />
          <br />
          <div className="text-icon">
            FLY FASTER{" "}
            <span className="symbol material-symbols-outlined">speed</span>
          </div>
          <br />
          <br />
          <div className="text-icon">
            {" "}
            FLY HAPPYER{" "}
            <span className="symbol material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </div>
        </div>
        <div>
          {" "}
          <img className="logo-hero" src={logo} alt="" />
        </div>

        <div className="hero-text1">
          GATE 05 IS THE ONLY COMPANY WHO CARES ABOUT YOU.
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default Hero;
