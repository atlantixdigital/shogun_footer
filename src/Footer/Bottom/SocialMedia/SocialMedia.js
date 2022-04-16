import React from "react";
import SVG from "../../../Common/SVG";

import './SocialMedia.scss';

/**
 * This component represents a single social media icon
 * @param {name, link, icon} props 
 * @returns 
 */
const SocialMedia = (props) => {
    return (
        <li>
            <a href={props.link} title={props.name} target="_blank">
                <SVG src={props.icon} />
            </a>
        </li>
    )
}

export default SocialMedia;