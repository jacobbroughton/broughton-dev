import "./Portfolio.scss";
import Footer from "../../components/Footer/Footer";
import BroughtonDetailing from "../../assets/portfolio/BDSS.png";
import XVentBox from "../../assets/portfolio/XVentBoxSS.png";
import RossKimbirl from "../../assets/portfolio/RossKimbirlSS.png";

const portfolioArr = [
    {
        name: "XVentBox Ventilation Systems",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Adipiscing enim eu turpis egestas pretium aenean pharetra.",
        link: "#",
        image: XVentBox
    }, 
    {
        name: "Broughton Detailing",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Adipiscing enim eu turpis egestas pretium aenean pharetra.",
        link: "#",
        image: BroughtonDetailing
    },
    {
        name: "Ross Kimbirl Photography",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum ut tristique et egestas. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Adipiscing enim eu turpis egestas pretium aenean pharetra.",
        link: "#",
        image: RossKimbirl
    }
]

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="portfolio-container">
          <h2>Portfolio</h2>
          <ul className="portfolio-list">

              { portfolioArr.map((project, index) => <li>
              <div className="image-parent">
                <img src={project.image} alt={project.name}/>
              </div>
              <div className="work-tile-text">
                <h3>{project.name}</h3>
                <hr/>
                <p>{project.description}</p>
                <a href="#" target="_blank">Take a look</a>
              </div>
            </li>) }
              
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
