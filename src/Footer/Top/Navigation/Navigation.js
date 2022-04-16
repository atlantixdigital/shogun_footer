import React, { useState } from "react";
import useCollapse from 'react-collapsed'

import NavigationItem from "./NavigationItem/NavigationItem";

import './Navigation.scss';

/**
 * This component represents navigation section. It includes navigation header text and a list of 
 * related navigation items.
 * 
 * @param {displayText, navLinks} props 
 * @returns 
 */
const Navigation = (props) => {
    // Collapse / Expand animation 
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    // Navition item list
    let navContent;
    if(props.navLinks) {
        navContent = props.navLinks.map((nav) => {
            return(
                <NavigationItem key={nav._id} 
                                link={nav.url} 
                                displayText={nav.displayText} 
                                highlightOnMobile={props.highlightOnMobile}
                                icon={nav.icon} 
                                tag={nav.tag} />
            )
        });
    }

    // Toggel button for mobile view.
    let expandIcon;
    if(!props.highlightOnMobile) {
        expandIcon = <i className="expand"></i>;
    }

    return (
        <div className={`col ${props.highlightOnMobile ? "col-product-nav" : ""}`}>
            <h4 {...getToggleProps()} className={`nav-title ${!props.highlightOnMobile ? "toggle-title" : ""} ${isExpanded ? "active" : ""}`}>
                {props.displayText}
                {expandIcon}
            </h4>
            {props.highlightOnMobile?
                // For Products navitaion
                (
                    <div className="nav-content">
                        <div className="footer-nav-list product-nav-list">
                                {navContent}
                        </div>
                    </div>
                ):
                // Other navations
                (
                    <div {...getCollapseProps()} className="nav-content toggle-content">
                        <div className="footer-nav-list">
                            {navContent}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Navigation;

