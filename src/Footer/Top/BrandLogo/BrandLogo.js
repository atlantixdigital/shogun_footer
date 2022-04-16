import React from "react";
import SVG from "../../../Common/SVG";
import './BrandLogo.scss';

/**
 * This component represents brand logo
 * @param {*} props 
 * @returns 
 */
const BrandLogo = (props) => {
    return (
        <div className="brand-logo">
            <a href={props.link}>
                <SVG src={props.logo} />
            </a>
        </div>
    )
};

export default BrandLogo;