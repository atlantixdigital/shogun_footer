import React from "react";

import BaseLineItem from "./BaseLineItem/BaseLineItem";
import SocialMedia from "./SocialMedia/SocialMedia";

import './Bottom.scss';

/**
 * This component represents bottom section of the footer.
 * It include social media icon, legal, privacy and copyright information.
 * @param {socialLinks, baselineLinks, legalText} props 
 * @returns 
 */
const Bottom = (props) => {

    // List of social media items
    let socialMedia;
    if(props.socialLinks) {
        socialMedia = props.socialLinks.map(el => {
            return( <SocialMedia key={el._id}
                        name={el.name}
                        link={el.url}
                        icon={el.icon}
            />);
        });
    }

    // List of base lien items.
    let baseLineItems;
    if(props.baselineLinks) {
        baseLineItems = props.baselineLinks.map(el => {
            return(
                <BaseLineItem key={el._id}
                            displayText={el.displayText}
                            link={el.url}
                />
            )
        });
    }

    return (
        <div className="footer-bottom-section">
            <div className="container">
                <div className="footer-inner">
                    <div className="row d-flex align-v-center justify-space flex-wrap">
                        <div className="col col-social-media">
                            <ul className="social-media-list">
                                {socialMedia}
                            </ul>
                        </div>
                        <div className="col col-nav-link">
                            <ul className="nav-links">
                                {baseLineItems}
                                <li className="base-line-item">
                                    {props.legalText}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottom;