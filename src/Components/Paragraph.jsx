import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

function Paragraph({ title, text }) {

    const [isOpen, setIsOpen] = useState(false);

    function toggleParagraph() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="appContentParagraph">
            <div className="appContentParagraphTitle" onClick={toggleParagraph}>
                <h3 className="title">{title}</h3>
                <FontAwesomeIcon icon={faCirclePlus} className="titleIcon titleIconPlus" />
                <FontAwesomeIcon icon={faCircleMinus} className={`titleIcon titleIconMinus ${isOpen ? "open" : ""}`}/>
            </div>

            {isOpen && <div className="appContentParagraphText"><p>{text}</p></div>}
        </div>
    );
}

export default Paragraph