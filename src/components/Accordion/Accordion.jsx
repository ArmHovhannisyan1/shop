import { useState } from "react";

const Accordion = ({ controllerElement, children }) => {
    const [isActive, setIsActive] = useState(false)
        ;
    return (
        <ul>
            <li className="row f-jBetween f-aCenter" onClick={() => setIsActive((prevActive) => !prevActive)}>
                {controllerElement(isActive)}
            </li>
            <div
                className={`AccordionContent ${isActive ? 'visible' : ''}`}>
                {children}
            </div>
        </ul>
    )
}

export default Accordion;