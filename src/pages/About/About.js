import "./About.scss";
import Footer from "../../components/Footer/Footer.js"
import { ReactComponent as React } from "../../assets/react-dark.svg";
import { ReactComponent as Javascript } from "../../assets/javascript.svg";
import { ReactComponent as MySql } from "../../assets/mysql.svg";
import { ReactComponent as HTML5 } from "../../assets/html5.svg";
import { ReactComponent as CSS3 } from "../../assets/css3.svg";

const About = () => {
  return (
      <>
    <div className="about">
      <div className="about-container">
        <div className="about-text-parent">
          <h1>
            The Story <span>of Broughton Dev</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut sem
            viverra aliquet eget sit. Lectus proin nibh nisl condimentum. Cursus
            euismod quis viverra nibh. In tellus integer feugiat scelerisque
            varius morbi enim. Mauris ultrices eros in cursus turpis massa
            tincidunt dui ut. Massa sed elementum tempus egestas. Vitae semper
            quis lectus nulla at volutpat diam ut venenatis. Lorem donec massa
            sapien faucibus et molestie. Mattis rhoncus urna neque viverra justo
            nec ultrices. Sit amet consectetur adipiscing elit pellentesque
            habitant morbi tristique senectus. Vitae aliquet nec ullamcorper
            sit. Nibh praesent tristique magna sit amet purus gravida. Magnis
            dis parturient montes nascetur ridiculus mus mauris vitae ultricies.
            Elit at imperdiet dui accumsan. At tempor commodo ullamcorper a
            lacus. Turpis egestas maecenas pharetra convallis posuere morbi.
            Lacus suspendisse faucibus interdum posuere lorem. Laoreet non
            curabitur gravida arcu ac. Consequat semper viverra nam libero justo
            laoreet sit amet.
          </p>
          <div className="tech-stack">
            <div className="tech-stack-item">
              <React className="svg" />
              <p>React JS</p>
            </div>
            <div className="tech-stack-item">
              <Javascript className="svg" />
              <p>Javascript</p>
            </div>
            <div className="tech-stack-item">
              <MySql className="svg" />
              <p>MySQL</p>
            </div>
            <div className="tech-stack-item">
              <HTML5 className="svg" />
              <p>HTML5</p>
            </div>
            <div className="tech-stack-item">
              <CSS3 className="svg" />
              <p>CSS3</p>
            </div>
          </div>
        </div>
        <div className="about-picture-and-text">
          <div className="image-parent"></div>
          <p>
            For me, function comes first. If a design is centered around user
            experience, with the flashy bits being the secondary focus, it will
            yield longer viewer retention and bring the right, qualified
            business your way.
          </p>
        </div>
      </div>
      
    </div>
    <Footer/>
    </>
  );
};

export default About;
