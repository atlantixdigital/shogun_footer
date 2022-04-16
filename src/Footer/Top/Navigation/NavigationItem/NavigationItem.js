import React from "react";
import SVG from "../../../../Common/SVG";

import './NavigationItem.scss';

/**
 * This component represent a navigation item.
 * @param {displayText, icon, link, tag, highlightOnMobile} props 
 * @returns 
 */
const NavigationItem = (props) => {
    
    return (
        <div>
            <a href={props.link} className={`nav-item ${props.highlightOnMobile ? "product-icon" : ""}`}>
                {props.icon ? <SVG src={props.icon} /> : null}
                {props.displayText ? <span className="link">{props.displayText}</span> : null }
                {props.tag ? <span className="tooltip">{props.tag}</span> : null }
            </a>
        </div>
    );
};

export default NavigationItem;

