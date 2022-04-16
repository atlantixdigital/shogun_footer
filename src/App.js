import "./scss/global.scss";
import Footer from "./Footer/Footer";

import {
  navSections,
  baselineLinks,
  socialLinks,
  legalText,
  brandLink,
  brandLogo
} from "./mockData";

export default () => {
  return (
    <Footer
      navSections={navSections}
      baselineLinks={baselineLinks}
      socialLinks={socialLinks}
      legalText={legalText}
      brandLink={brandLink}
      brandLogo={brandLogo}
    />
  );
};
