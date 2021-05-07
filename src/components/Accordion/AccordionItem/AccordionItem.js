import { useState, useEffect, useRef } from "react";
import { ReactComponent as Arrow } from "../../../assets/downarrow.svg"
import "./AccordionItem.scss"

const AccordionItem = ({ activeMode, item, index, onClick }) => {
  const bodyRef = useRef();
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0);

  useEffect(() => {
    setCurrentScrollHeight(bodyRef.current.scrollHeight);
  }, [bodyRef]);

  const inactiveStyle = {
    opacity: '0',
    maxHeight: '0',
    zIndex: '-1'
  }

  const activeStyle = {
    // padding: 0,
    opacity: '1',
    maxHeight: currentScrollHeight,
    zIndex: '1'
  }

  return (
    <li className="accordionItem" onClick={activeMode ? "" :  onClick}>
      <div className="accordion-header-and-icon">
        <h3 className={`accordionHeader ${activeMode ? "active" : ""}`}>{item.header}</h3>
        <div className={`accordionIcon ${activeMode ? "active" : ""}`}>
          <Arrow className="arrow" fill={`${activeMode ? "#0570ec" : "#181818" }`}/>
        </div>
      </div>
      
        
      <div
        ref={bodyRef}
        style={
          activeMode
            ? activeStyle : inactiveStyle   
        }
        className={`accordionContent ${activeMode ? "active" : ""}`}
        id={index}
      >
        <p className="accordionBody">{item.body}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
