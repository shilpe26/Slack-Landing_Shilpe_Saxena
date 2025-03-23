import React from "react";
import BrandLogos from "./BrandLogos";
import CookieConsent from "./CookieConsent";
import ChatBubble from "./ChatBubble";
import FutureSection from "./FutureSection";

const Footer = () => {
  return (
    <footer className="text-center py-6">
      <BrandLogos />
      <FutureSection />
      <div>
        <CookieConsent />
        <ChatBubble />
      </div>
      <p>© 2025 Slack. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
