import { Container } from "./styles";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import sqlIcon from "../../assets/Icons/mysql-icon.svg";
import pythonIcon from "../../assets/Icons/python.png";
import tableauIcon from "../../assets/Icons/tableau.png";
import powerBIIcon from "../../assets/Icons/powerbi.png";
import tansorFlowIcon from "../../assets/Icons/tensorflow.png";
import pyTorchIcon from "../../assets/Icons/pytorch.svg";
import unityIcon from "../../assets/Icons/unity.svg";
import figmacon from "../../assets/Icons/Figma.png";
import awsIcon from "../../assets/Icons/AWS1.png";
import azureIcon from "../../assets/Icons/Azure.png";
import dataBricksIcon from "../../assets/Icons/DataBricks.png";
import typescriptIcon from "../../assets/typescript-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import dataSource from "../../data/site_data.json";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>{dataSource.about.title}</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>{dataSource.about.msg1}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>{dataSource.about.msg2}</p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.3 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>{dataSource.about.msg3}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <p>{dataSource.about.msg4}</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <h3>{dataSource.about.main_skill}</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={sqlIcon} alt="SQL" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={pythonIcon} alt="Python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={tableauIcon} alt="Tableau" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={powerBIIcon} alt="PowerBI" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={tansorFlowIcon} alt="TensorFlow" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={pyTorchIcon} alt="PyTorch" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={unityIcon} alt="Unity" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.21 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.22 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
                  <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.23 * 1000}>
              <img src={figmacon} alt="Figma" />
            </ScrollAnimation>
          </div>
                  <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.24 * 1000}>
              <img src={awsIcon} alt="AWS" />
            </ScrollAnimation>
          </div>
                  <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.25 * 1000}>
              <img src={azureIcon} alt="Azure" />
            </ScrollAnimation>
          </div>
                  <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.26 * 1000}>
              <img src={dataBricksIcon} alt="Databricks" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div> */}
        </div>
      </div>
    </Container>
  );
}
