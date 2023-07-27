import React from "react";
import "./Contact.scss";
import { VscGithub } from "react-icons/vsc";
import {  SiLinkedin } from "react-icons/si";
import { PiFacebookLogoBold, PiWhatsappLogo } from "react-icons/pi";
import { MdCall, MdEmail, MdConnectWithoutContact } from "react-icons/md";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="connect_img">
          <MdConnectWithoutContact size={300}/>
        </div>
        <div className="connect">
          <h4>
            <span>
              <MdCall />
            </span>{" "}
            +91-9634182319
          </h4>
          <h4>
            <span>
              <PiWhatsappLogo />
            </span>{" "}
            +91-9634182319
          </h4>
          <h4>
            <span>
              <MdEmail />
            </span>{" "}
            sharmanish2109@gmail.com
          </h4>
        </div>
        <div className="connect">
          <div className="social">
            <h3>Social Accounts</h3>
            <div className="links">
            <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <VscGithub size={19} />
              </a>
              {/* <a
                href="#"
                target="_self"
                rel="noopener noreferrer"
                className="link"
              >
                <SiInstagram size={19} />
              </a> */}
              <a
                href="http://www.linkedin.com/in/manish-sharma-4ba39520b"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <SiLinkedin size={19} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100034722050598"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <PiFacebookLogoBold size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
