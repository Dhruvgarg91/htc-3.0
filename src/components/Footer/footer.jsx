import React, { useEffect, useState } from "react";
import "./footer.scss";
import Insta from "./icons8-instagram.svg";
import Dis from "./icons8-discord.svg";
import Linked from "./icons8-linkedin-2.svg";
import Mail from "./icons8-mail.svg";
import DevPost from "./icons8-dev-post.svg";
import PrivacyPolicy from "./Privacy policy.pdf";
import TermsOfUse from "./Terms of use.pdf";
import Twitter from "./icons8-twitter.svg";
import { Btn } from "../Top-division-components/Top-division-components.jsx";
import { SOCIALS, FOOTER } from "../../Module/General";

export default function Footer() {
  const [template, setTemplate] = useState(false);
  const [viewTemplate, setViewTemplate] = useState(true);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const listenScrollEvent = () => {
    if (window.scrollY > 2800) {
      setTemplate(true);
      setShowMap(true);
    } else if (window.scrollY < 2800) {
      setTemplate(false);
      setShowMap(false);
    }
  };

  return (
    <div>
      <div className="footer">
        <div className="Register_a">
          <div
            className="apply-button"
            data-hackathon-slug="hackthecrisis30"
            data-button-theme="light"
            style={{ height: "44px", width: "312px" }}
          ></div>
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            </a>
          )}
        </div>
        {showMap && (
          <div className="pp">
          <div className="map-social-container">
            <div className="map-container">
              <h2 className="hhh">Location:</h2>
              <p>A-4, Paschim Vihar, New Rohtak Raod (In Front of Paschim Vihar East Metro Station), New Delhi, Delhi 110063</p>
            </div>
            <div className="map-container">
              <h2 className="hhh">Map:</h2>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5678.237381126973!2d77.11261932381059!3d28.67719569979277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d038dc3b91bc3%3A0x909c31c649a710b0!2sBharati%20Vidyapeeth%20Deemed%20University!5e0!3m2!1sen!2sin!4v1708254335969!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="social-container">
              <h2 className="hhh">Connect with us:</h2>
              <div className="social-icons">
                <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
                  <i className="fab fa-3x fa-instagram"></i>
                </a>
                <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
                  <i className="fab fa-3x fa-discord"></i>
                </a>
                <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
                  <i className="fab fa-3x fa-linkedin-in"></i>
                </a>
                <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
                <i class="fa fa-envelope-o" style={{ fontSize: '45px'}}></i>
                </a>
              </div>
            </div>
            </div>
          </div>
        )}
        <div className="footer_info">
          {FOOTER.Privacy_policy.required && (
            <a
              href={PrivacyPolicy}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Privacy Policy</p>
            </a>
          )}
          {FOOTER.Terms_of_use.required && (
            <a
              href={TermsOfUse}
              download
              target="blank"
              className="privacy-policy"
            >
              <p>Terms of Use</p>
            </a>
          )}
          <p>Made with ❤️ by HTC team</p>
        </div>
        {template && viewTemplate && (
          <template hidetemplate={() => setViewTemplate(false)} />
        )}
      </div>
    </div>
  );
}
