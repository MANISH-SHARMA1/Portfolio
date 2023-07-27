import React from "react";
import "./Home.scss";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin, SiCodechef, SiInstagram } from "react-icons/si";
import { PiFacebookLogoBold } from "react-icons/pi";
import { MdCall, MdEmail } from "react-icons/md";
import Message from "../../pages/message/Message";

function Home() {
  
  return (
    <div>
      <div className="home">
        <section>
          <div className="about">
            <h3>Hi, It's Me</h3>
            <h1>
              I'm <span>Manish</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero,
              soluta.
            </p>
            <div className="social">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                <VscGithub size={19} />
              </a>
              <a
                href="#"
                target="_self"
                rel="noopener noreferrer"
                className="link"
              >
                <SiInstagram size={19} />
              </a>
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
          
          <div className="about">
            <div className="aboutt">
              <SiCodechef size={150} />
            </div>
          </div>
        </section>

        <section>
          <div className="me codechef">
            <SiCodechef size={130} />
          </div>

          <div className="me">
            <div className="mee">
              <h2>
                About <span>Me</span>
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptate, quasi.
              </p>
              <p>
                <span>
                  <MdCall />
                </span>{" "}
                +91-9634182319
              </p>
              <a
                href="http://www.gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span>
                  <MdEmail />
                </span>{" "}
                sharmanish2109@gmail.com
              </a>
            </div>
          </div>
        </section>

        <section>
          <Message />
        </section>
      </div>
    </div>
  );
}

export default Home;
