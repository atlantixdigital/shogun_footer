import React from "react";

/**
 * This component converts svg string to image component.
 * @param {src} props 
 * @returns img
 */
const SVG = (props) => {
    const buff = new Buffer(props.src);
    const base64data = buff.toString('base64');
    const imgSrc = `data:image/svg+xml;base64,${base64data}`;
    return <img src={imgSrc} />
}

export default SVG;