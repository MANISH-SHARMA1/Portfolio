import React from "react";
import "./About.scss";
import { PiGraduationCapBold, PiCertificateBold } from "react-icons/pi";
import { LuSchool } from "react-icons/lu";
import { SiCodeproject } from "react-icons/si";
import certificate from "./MERN_certificate.png";

function About() {
  return (
    <>
      <div className="about">
        <section>
          <h2>Education</h2>
          <div className="education">
            <h3>
              <span>
                <PiGraduationCapBold />
              </span>{" "}
              Graduation <span>(2023)</span>
            </h3>
            <h4>
              Choudhary Charan Singh University, <span>Meerut</span>
            </h4>
            <p>
              <span>Aggregation:</span> 73%
            </p>
            <h3>
              <span>
                <LuSchool />
              </span>{" "}
              Intermediate <span>(2019)</span>
            </h3>
            <h4>C.B.S.E</h4>
            <p>
              <span>Aggregation:</span> 70%
            </p>
            <h3>
              <span>
                <LuSchool />
              </span>{" "}
              High School <span>(2017)</span>
            </h3>
            <h4>C.B.S.E</h4>
            <p>
              <span>Aggregation:</span> 70%
            </p>
          </div>
        </section>
        <section>
          <h2>Certificates</h2>
          <div className="certificate">
            <h4 className="desc">
              <span>
                <PiCertificateBold size={23} />
              </span>{" "}
              Full Stack Development Course using <span>MERN</span>
            </h4>
            <img className="desc" src={certificate} alt="certificate" />
          </div>
        </section>
        <section>
          <h2>Projects</h2>
          <div className="project">
            <a
              href="https://github.com/MANISH-SHARMA1/Ecommerce-application-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>
                {" "}
                <span>
                  <SiCodeproject /> Ecommerce
                </span>{" "}
                Website
              </h3>
            </a>{" "}
            <a href="https://github.com/MANISH-SHARMA1/Politics" target="_blank" rel="noopener noreferrer">
              <h3>
                <span>
                  <SiCodeproject /> Political
                </span>{" "}
                Website
              </h3>
            </a>
            {/* <a href="#" target="_self" rel="noopener noreferrer">
              <h3>
                <span>
                  <SiCodeproject /> Portfolio
                </span>{" "}
                Website
              </h3>
            </a> */}
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
