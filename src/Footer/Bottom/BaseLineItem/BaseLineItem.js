import React from "react";

import './BaseLineItem.scss';

/**
 * This component represents a base line item, legal and privacy link.
 * @param {displayText, link} props 
 * @returns 
 */
const BaseLineItem = (props) => {
    return (
        <li className="base-line-item">
            <a href={props.link} className="base-line-item">
                {props.displayText}
            </a>
        </li>
    );
};

export default BaseLineItem;