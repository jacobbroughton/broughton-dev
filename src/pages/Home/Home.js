import { useEffect, useState, useRef } from "react"
import { openPopupWidget } from "react-calendly";
import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion/Accordion"
import AccordianItem from "../../components/AccordionItem/AccordionItem";
import "./Home.scss";

const Home = () => {

  // const [itemStatus, setItemStatus] = useState(false)
  // const [openProcessItem, setOpenProcessItem] = useState()
  const [activeIndex, setActiveIndex] = useState(0)
  const bodyRef = useRef(null)

  const processItems = [
    {
      id: 0,
      header: "Establish your goals",
      body:
        "First things first, we’ll need to establish a goal for your website. Do you want more calls coming in? More eyes on your company? Showcase of your work? All of the above?",
    },
    {
      id: 1,
      header: "Gather information & assets",
      body:
        "I’ll need this in order to start the design process. Some things like big paragraphs can be held off initially, but i’ll need the essentials like services that you offer, and pricing structures that you offer. Along with logos & imagery that you would like included in the website.",
    },
    {
      id: 2,
      header: "First Draft Design Wireframe or Static Mockup",
      body:
        "I want you to be thrilled with the end result, this mockup won’t necessarilly reflect the final product in it’s entirety, but it will give you a platform to voice any critisisms that you may have before the development process starts. ",
    },
    {
      id: 3,
      header: "Development Process",
      body:
        "This is where I develop your website, we’ll keep in contact through the whole process, and i’ll give you regular updates on how everything is going. All websites are built from the ground-up, no pre-made templates. Your website will truly be 1-of-1.",
    },
    {
      id: 4,
      header: "Website Presentation",
      body:
        "You’ll be able to see what i’ve made and make any reasonable calls that you think of. This website will be a huge asset to your business, and I do want you to be as thrilled as possible with it. ",
    },
    {
      id: 5,
      header: "Website Launch",
      body:
        "At this stage, its time for your website to go live for the world to see.",
    },
  ];


  const HomeCTA = ({ url, prefill, pageSettings, utm, styles }) => {
    const onClick = () =>
      openPopupWidget({ styles, url, prefill, pageSettings, utm });

    return (
      <button className="homeCTA" onClick={onClick}>
        Book a Meeting Now
      </button>
    );
  };

  // const handleOpenProcessItem = (key) => {
  //   // console.log(key)
  //   setOpenProcessItem(key)
  // }


  return (
    <div className="home">
      <main className="main">
        <div className="homeText">
          <h1>Crafting functional & engaging websites</h1>
          <p>
            Website design & development based in <strong>Charlotte, NC</strong>
          </p>
          <div className="buttons">
            <HomeCTA url="https://calendly.com/broughtondev" />
            <Link to="#">See Plans {">"}</Link>
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
          <h2>So hows does this work?</h2>
          <div className="processMenu">
            <div className="picture"></div>
            <div className="processList">
              {/* {processItems.map((item, index) => (

                <AccordianItem 
                  key={item.id} 
                  data={item} 
                  index={index}
                  onClick={() => setActiveIndex(index)}
                />
              ))} */}
              <Accordion items={processItems} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
