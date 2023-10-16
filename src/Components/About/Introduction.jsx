import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";



export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src='https://camo.githubusercontent.com/415035abe402bd83c4e8ded5aca75c49789ed4b469bcb85497a1113d7d4819db/68747470733a2f2f7777772e6c616d626461746573742e636f6d2f7265736f75726365732f696d616765732f6e65777332342e6769662f' alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Alwin Raj J </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Idukki, Kerala (India)
                </span>
                . I have completed my graduation in BTech (Computer Science and Engineering)
                from{" "}
                <span className="different">
                  APJ Abdul Kalam Technological University <span></span>
                </span>
                and joined MEARN stack development course by{" "}
                <span className="different">Luminar TechnoLab</span>
              </h4>
              <h4>I thrive in designing and building seamless web applications that meet both client needs and user expectations.</h4>
              <h4>I am an advocate for clean, maintainable code and best coding practices. Agile methodologies are at the core of my development process, ensuring adaptability and delivering quality solutions efficiently.</h4>
              <h4>I am driven by the potential of technology to shape the future. I aspire to create software that not only solves problems but also enhances people's lives. When I'm not coding, I'm exploring the latest trends, contributing to open-source projects and constantly striving to broaden my skill set.</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
