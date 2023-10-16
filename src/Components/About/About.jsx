import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Alwin Raj J</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Junior MEARN Stack Web developer with a strong foundation in front-end and back-end technologies.Passionate in creating web
applications that are both user-friendly and responsive.

        </p>
        <div className="about__contact center">
  <a
    href="https://github.com/Alwin-GitRepo"
    target="_blank"
    rel="noreferrer"
    aria-label="github"
    className="link link--icon"
  >
    <GitHubIcon />
  </a>
<a
  href="mailto:alwin.melattu@gmail.com"
  rel="noreferrer"
  aria-label="mail"
  className="link link--icon"
>

    <EmailIcon />
  </a>
  <a
    href="https://www.linkedin.com/in/alwin-raj-j/"
    target="_blank"
    rel="noreferrer"
    aria-label="linkedin"
    className="link link--icon"
  >
    <LinkedInIcon />
  </a>
</div>


        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1PoWIvgV2ad5Q8BS-LzI7jbCgt2hAYL_R/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
