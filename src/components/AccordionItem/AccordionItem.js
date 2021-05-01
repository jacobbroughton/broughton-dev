import { useState, useEffect, useRef } from "react";
import "./AccordionItem.scss"

const AccordionItem = ({ activeMode, item, index, onClick }) => {
  const bodyRef = useRef();
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0);

  useEffect(() => {
    setCurrentScrollHeight(bodyRef.current.scrollHeight);
  }, [bodyRef]);

//   const styles = {
//     transition: "max-height .15s ease;",
//     activeMode ? maxHeight: currentScrollHeight } : { maxHeight: 0 }
//   }

  const inactiveStyle = {
    // transition: "max-height .2s ease",
    opacity: '0',
    maxHeight: '0',
    zIndex: '-1'
  }

  const activeStyle = {
    padding: 0,
    // transition: "max-height .15s ease",
    opacity: '1',
    maxHeight: currentScrollHeight,
    zIndex: '1'
  }

  return (
    <li className="accordionItem" onClick={onClick}>
      {/* <button className="accordionButton" > */}
        <h3 className="accordionHeader">{item.header}</h3>
      {/* </button> */}
      {/* <div ref={bodyRef} className={props.openProcessItem === props.key ? "processBodyContainer open" : "processBodyContainer closed"} id={props.key}> */}
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
