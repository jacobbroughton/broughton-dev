import { useState, useEffect } from "react"
import "./Accordion.scss"
import AccordianItem from "./AccordionItem/AccordionItem"

const Accordion = ({ items, process, setProcessPictureIndex }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleClick = ( clickedIndex ) => {
        process && setProcessPictureIndex(clickedIndex)
        let selected = selectedIndex === clickedIndex ? null : clickedIndex
        setSelectedIndex(selected)
    }


    
    const renderedItems = items.map((item, index) => {
        return (
            <AccordianItem 
                activeMode={selectedIndex === index}
                item={item} 
                index={index}
                onClick={() => handleClick(index)}
            />
        )
    })

    return (
        <ul className="accordion-list">{renderedItems}</ul>
    )
}

export default Accordion