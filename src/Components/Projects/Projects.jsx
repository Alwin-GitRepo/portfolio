import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import luminar from '../../assets/Luminar.png'
import travel from '../../assets/Travel Vlog.png'
import budget from '../../assets/Budget Calculator.png'
import discount from '../../assets/Discount Calculator.png'
import weather from '../../assets/weather.png'
import media from '../../assets/Media.png'
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={luminar}
                  />
                </div>
              </div>
              <div className="project_information">
                <h2 >Luminar Website Clone</h2>
                <div>
                  <a
                    href="https://github.com/Alwin-GitRepo/Luminar-Clone-Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={travel}
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Travel Blog Clone</h2>
                <div>
                  <a
                    href="https://github.com/Alwin-GitRepo/Travel-Blog-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={budget} alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Budget Calculator</h2>
                <div>
                  <a
                    href="https://github.com/Alwin-GitRepo/budget-calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={discount}
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Discount Calculator</h2>
                <div>
                  <a
                    href="https://github.com/Alwin-GitRepo/discount-calculator"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={weather}
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <div>
                  <a
                    href="https://github.com/Alwin-GitRepo/weather-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={media}
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Media App</h2>
                <div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
