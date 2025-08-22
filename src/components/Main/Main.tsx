import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

import awsIcon from "../../assets/Icons/AWS1.png";
import azureIcon from "../../assets/Icons/Azure.png";
import dataBricksIcon from "../../assets/Icons/DataBricks.png";
import figmaIcon from "../../assets/Icons/Figma.png";
import sqlIcon from "../../assets/Icons/mysql-icon.svg";
import powerBIIcon from "../../assets/Icons/powerbi.png";
import pythonIcon from "../../assets/Icons/python.png";
import tableauIcon from "../../assets/Icons/tableau.png";
import tensorflowIcon from "../../assets/Icons/tensorflow.png";
import pyTorchIcon from "../../assets/Icons/pytorch.svg";
import unityIcon from "../../assets/Icons/unity.svg";
// import wordpress from "../../assets/wordpress.svg";
// import shopify from "../../assets/shopify.svg";
// import htmlIcon from "../../assets/html-icon.svg";
// import cssIcon from "../../assets/css-icon.svg";
// import sassIcon from "../../assets/sass-icon.svg";
// import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
// import vueIcon from "../../assets/vue-icon.svg";
// import boostrapIcon from "../../assets/bootstrap-icon.svg";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onDiv: {
                elementId: "repulse-div",
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: false,
                  force: 60,
                  smooth: 10,
                },
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 2,
              },
              connect: {
                distance: 80,
                lineLinked: {
                  opacity: 0.5,
                },
                radius: 60,
              },
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              push: {
                quantity: 2,
              },
              remove: {
                quantity: 2,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            lineLinked: {
              blink: false,
              color: "#000",
              consent: false,
              distance: 150,
              enable: false,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: {
                enable: false,
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              bounce: false,
              direction: "none",
              enable: true,
              outMode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 20,
              value: 15,
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.2,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 1,
            },
            rotate: {
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
              direction: "random",
              random: true,
              value: 0,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: [
                {
                  src: awsIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: azureIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: dataBricksIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: figmaIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: sqlIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: powerBIIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: pythonIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: pyTorchIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: tableauIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: typescriptIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: tensorflowIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: unityIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: reactIcon,
                  width: 20,
                  height: 20,
                },
                {
                  src: nodeIcon,
                  width: 20,
                  height: 20,
                },
                // {
                //   "src": vscodeIcon,
                //   "width": 20,
                //   "height": 20
                // },
              ],
              polygon: {
                sides: 5,
              },
              stroke: {
                color: "#000000",
                width: 0,
              },
              type: "image",
            },
            size: {
              animation: {
                enable: false,
                minimumValue: 0.1,
                speed: 40,
                sync: false,
              },
              random: false,
              value: 16,
            },
          },
          polygon: {
            draw: {
              enable: false,
              lineColor: "#ffffff",
              lineWidth: 0.5,
            },
            move: {
              radius: 10,
            },
            scale: 1,
            url: "",
          },
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}
