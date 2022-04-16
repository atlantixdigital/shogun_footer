import React from "react";

import Top from "./Top/Top";
import Bottom from "./Bottom/Bottom";

import './Footer.scss';

/**
 *  Footer component. 
 *  It's a root component of footer. It includes Top and Bottom section of footer.
 * @param {brandLink, brandLogo} props 
 * @returns 
 */
const Footer = (props) => {
  
  return (
    <div className="site-footer">
      {/* Top section of the footer. */}
      <Top brandLink={props.brandLink} 
            brandLogo={props.brandLogo}
            navSections={props.navSections} />

      {/* Bottom section of the footer. */}
      <Bottom socialLinks={props.socialLinks}
              baselineLinks={props.baselineLinks}
              legalText={props.legalText} />
    </div>
  );
};

export default Footer;
