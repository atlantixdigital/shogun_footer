import React from "react";
import BrandLogo from "./BrandLogo/BrandLogo";
import Navigation from "./Navigation/Navigation";

import './Top.scss';

/**
 * Top section of the footer. It includes logo and navigation link components.
 * @param {navSections, brandLink, brandLogo } props 
 * @returns 
 */
const Top = (props) => {
    // List of nevation section.
    let navigationList;

    // Create a list of navigation components if navSections is provided.
    if(props.navSections) {
        navigationList = props.navSections
            .map((nav) => {
                return(
                    <Navigation key={nav._id} 
                                    link={nav.url} 
                                    displayText={nav.displayText} 
                                    icon={nav.icon} 
                                    tag={nav.tag} 
                                    highlightOnMobile={nav.highlightOnMobile}
                                    navLinks={nav.navLinks}/>
                )
            });
    }
    return (
        <div className="footer-top-section">
            <div className="container">
                <div className="row d-flex align-start justify-space flex-wrap">
                    <div className="col col-footer-logo">
                        <BrandLogo link={props.brandLink} logo={props.brandLogo} />
                    </div>
                    <div className="col col-footer-navigation">
                        <div className="row d-flex align-start justify-space flex-wrap">
                            {navigationList}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;

