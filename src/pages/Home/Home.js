import { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion";
import CTAButton from "../../components/CTA Button/CTAButton";
import CTABanner from "../../components/CTA Banner/CTABanner"
import Footer from "../../components/Footer/Footer";
import BroughtonDetailing from "../../assets/portfolio/BDSS.png";
import XVentBox from "../../assets/portfolio/XVentBoxSS.png";
import RossKimbirl from "../../assets/portfolio/RossKimbirlSS.png";
import { ReactComponent as React } from "../../assets/react-dark.svg";
import { ReactComponent as Javascript } from "../../assets/javascript.svg";
import { ReactComponent as MySql } from "../../assets/mysql.svg";
import { ReactComponent as HTML5 } from "../../assets/html5.svg";
import { ReactComponent as CSS3 } from "../../assets/css3.svg";
import Code from "../../assets/code.png"
import "./Home.scss";

const Home = () => {
  const [processPictureIndex, setProcessPictureIndex] = useState(0);

  const processItems = [
    {
      id: 0,
      header: "Establish your goals",
      body:
        "First things first, we’ll need to establish a goal for your website. Do you want more calls coming in? More eyes on your company? Showcase of your work? All of the above?",
      image: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
    },
    {
      id: 1,
      header: "Gather information & assets",
      body:
        "I’ll need this in order to start the design process. Some things like big paragraphs can be held off initially, but i’ll need the essentials like services that you offer, and pricing structures that you offer. Along with logos & imagery that you would like included in the website.",
      image: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
    },
    {
      id: 2,
      header: "First Draft Design Wireframe or Static Mockup",
      body:
        "I want you to be thrilled with the end result, this mockup won’t necessarilly reflect the final product in it’s entirety, but it will give you a platform to voice any critisisms that you may have before the development process starts. ",
      image: "https://homepages.cae.wisc.edu/~ece533/images/zelda.png",
    },
    {
      id: 3,
      header: "Development Process",
      body:
        "This is where I develop your website, we’ll keep in contact through the whole process, and i’ll give you regular updates on how everything is going. All websites are built from the ground-up, no pre-made templates. Your website will truly be 1-of-1.",
      image: "https://homepages.cae.wisc.edu/~ece533/images/boat.png",
    },
    {
      id: 4,
      header: "Website Presentation",
      body:
        "You’ll be able to see what i’ve made and make any reasonable calls that you think of. This website will be a huge asset to your business, and I do want you to be as thrilled as possible with it. ",
      image: "https://homepages.cae.wisc.edu/~ece533/images/monarch.png",
    },
    {
      id: 5,
      header: "Website Launch",
      body:
        "At this stage, its time for your website to go live for the world to see.",
      image: "https://homepages.cae.wisc.edu/~ece533/images/peppers.png",
    },
  ];

  const faqItems = [
    {
      id: 0,
      header:
        "Quis risus sed vulputate odio ut enim blandit volutpat maecenas?",
      body:
        "Quis risus sed vulputate odio ut enim blandit volutpat maecenas. Quis risus sed vulputate odio ut enim blandit volutpat maecenas.",
    },
    {
      id: 1,
      header:
        "Felis eget nunc lobortis mattis aliquam faucibus purus in massa?",
      body:
        "Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Felis eget nunc lobortis mattis aliquam faucibus purus in massa.",
    },
    {
      id: 2,
      header: "Ut consequat semper viverra nam libero justo laoreet sit?",
      body:
        "Ut consequat semper viverra nam libero justo laoreet sit. Ut consequat semper viverra nam libero justo laoreet sit. ",
    },
    {
      id: 3,
      header: "Sit amet nisl suscipit adipiscing?",
      body:
        "Sit amet nisl suscipit adipiscing, Sit amet nisl suscipit adipiscing, Sit amet nisl suscipit adipiscing.",
    },
    {
      id: 4,
      header: "A cras semper auctor neque vitae tempus quam pellentesque?",
      body:
        "A cras semper auctor neque vitae tempus quam pellentesque, A cras semper auctor neque vitae tempus quam pellentesque, A cras semper auctor neque vitae tempus quam pellentesque.",
    },
  ];

  return (
    <div className="home">
      <main className="main">

        <div className="homeTextSection">
          <div className="homeTextContainer">
            <h1>Crafting functional & engaging websites</h1>
            <p>
              Website design & development based in{" "}
              <strong>Charlotte, NC</strong>
            </p>
            <div className="buttons">
              <CTAButton url="https://calendly.com/broughtondev" />
              <Link to="#">See Plans {">"}</Link>
            </div>
          </div>
          <div className="home-landing-gradient">
            <div className="main-image-div">
              <img src={Code} alt=""/>
            </div>
            <div className="sub-images-div">
              <React className="svg" id="react"/>
              <Javascript className="svg" id="javascript"/>
              <HTML5 className="svg" id="html"/>
              <CSS3 className="svg" id="css"/>
            </div>
          </div>
        </div>

        <div className="designQuote">
          <div className="designQuoteText">
            <h2>
              "Design is not just what it looks like and feels like. Design is
              how it works."
            </h2>
            <p>Steve Jobs, founder of Apple</p>
          </div>
        </div>

        <div className="processMenuSection">
          <div className="process-menu-container">
            <h2>So hows does this work?</h2>
            <div className="processMenu">
              <div className="picture">
                <img
                  src={processItems[processPictureIndex].image}
                  alt={processItems[processPictureIndex].header}
                />
              </div>
              <div className="processAccordionParent">
                <Accordion
                  process={true}
                  setProcessPictureIndex={setProcessPictureIndex}
                  items={processItems}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="myWorkSection">
          <h2>Check out my latest work</h2>
          <div className="workImagesParent">
            <div className="workImages">
              <a
                id="img1"
                href="https://www.xventbox.com"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={XVentBox} />
              </a>
              <a
                id="img2"
                href="https://www.broughtondetailing.com"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={BroughtonDetailing} />
              </a>
              <a
                id="img3"
                href="https://www.rosskimbirlphotography.com"
                target="_blank"
                rel="noreferrer"
              >
                <img alt="" src={RossKimbirl} />
              </a>
            </div>
          </div>
        </div>

        <div className="homeFAQSection">
          <div className="faqContainer">
            <h2>A few frequently asked questions</h2>
            <Accordion
              process={false}
              setProcessPictureIndex={setProcessPictureIndex}
              items={faqItems}
            />
          </div>
        </div>

        <CTABanner/>

        <Footer />
        
      </main>
    </div>
  );
};

export default Home;
