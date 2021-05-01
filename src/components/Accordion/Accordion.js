import { useState, useEffect } from "react"
import AccordianItem from "../AccordionItem/AccordionItem"

const Accordion = ({ items }) => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    useEffect(() => {
        console.log(selectedIndex)
    }, [selectedIndex])

    const handleClick = ( clickedIndex ) => {
        let selected = selectedIndex === clickedIndex ? null : clickedIndex
        setSelectedIndex(selected)
    }
    
    const renderedItems = items.map((item, index) => {
        const showBody = index === selectedIndex ? "show-body" : ""
        return (
            <AccordianItem 
                // showBody={showBody}
                activeMode={selectedIndex === index}
                item={item} 
                index={index}
                onClick={() => handleClick(index)}
            />
        )
    })

    return (
        <div className="accordion">
            <ul className="accordion-list">{renderedItems}</ul>
        </div>
    )
}

export default Accordion