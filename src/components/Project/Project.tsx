import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { useState } from "react";

const pdfs = [
  "/Documents/Instashop_Case Study.pdf",
  "/Documents/PadCare Labs – Case study.pdf",
  "/Documents/Facebook Roommate Feature.pdf",
  "/Documents/Beyond The Mirror.docx.pdf",
  "/Documents/Research paper.pdf",
];
export function Project() {
   const [modalOpen, setModalOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const openModal = (url: string) => {
    setPdfUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPdfUrl(null);
  };
  return (
    <Container id="project">
      <h2>Product Portfolio</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>InstaShop</h3>
              <ul>
                <li>
                  InstaShop is a proposed end-to-end shopping platform within
                  Instagram that bridges the gap between inspiration and
                  purchase.
                </li>
                <li>
                  By integrating shoppable Reels, influencer-tagged products,
                  AI-driven recommendations, and seamless Meta Pay checkout,
                  InstaShop aims to transform Instagram into a leading social
                  commerce destination.
                </li>
                <li>
                  This case study outlines the vision, strategy, and roadmap for
                  InstaShop, emphasizing user obsession, data-driven execution,
                  and cross-functional planning.
                </li>
              </ul>
            </div>
            <footer>
              {" "}
              <button className="button" onClick={() => openModal(pdfs[0])}>View Doc</button>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>PadCare Labs – Closing the Loop on Menstrual Waste</h3>
              <ul>
                <li>
                  This case study explores how PadCare Labs is tackling one of
                  the least-discussed but most pressing sustainability
                  challenges: menstrual waste.
                </li>
                <li>
                  By combining empathy for waste workers, smart hardware, and a
                  patented recycling process, PadCare created a circular system
                  that transforms discarded pads into valuable raw materials.
                </li>
                <li>
                  Beyond the environmental impact, the solution restores
                  dignity, protects health, and shows how thoughtful product
                  design can shift social norms.
                </li>
                <li>
                  For me, this story highlights the role of product leadership
                  in solving problems that sit at the intersection of
                  technology, human experience, and sustainability.
                </li>
              </ul>
            </div>
            <footer>
              {" "}
              <button className="button" onClick={() => openModal(pdfs[1])}>View Doc</button>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Facebook Roommate Feature</h3>
              <ul>
                <li>
                  Facebook Roommate is a proposed feature within Facebook that
                  transforms the messy, unverified roommate search in groups
                  into a safe, structured, and social experience.
                </li>
                <li>
                  By integrating verified profiles, lifestyle-based smart
                  matching, and secure in-app communication, Facebook Roommate
                  aims to redefine how students and young professionals find
                  compatible housemates.
                </li>
                <li>
                  This case study outlines the vision, strategy, and
                  go-to-market roadmap for Facebook Roommate, highlighting
                  trust, safety, and the power of Facebook’s social graph as key
                  differentiators.
                </li>
              </ul>
            </div>
            <footer>
              {" "}
              <button className="button" onClick={() => openModal(pdfs[2])}>View Doc</button>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Beyond the Mirror</h3>
              <ul>
                <li>
                  Beyond the Mirror is a case study that examines how virtual
                  try-on technology can evolve from a student prototype into a
                  scalable product.
                </li>
                <li>
                  Drawing on my AR Virtual Fitting Room research built in Unity
                  3D, this study compares that hands-on work with Google’s Doppl
                  experiment to surface lessons in fit accuracy, realism,
                  inclusivity, and privacy.
                </li>
                <li>
                  It highlights both the technical hurdles and the product
                  opportunities, showing how empathy and design thinking can
                  transform experimental AR into a trusted shopping experience.
                </li>
              </ul>
            </div>
            <footer>
              {" "}
              <button className="button" onClick={() => openModal(pdfs[3])}>View Doc</button>{" "}
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <div className="body">
              <h3>Augmented-Reality-Based Virtual Fitting Room</h3>
              <ul>
                <li>
                  Augmented-Reality-Based Virtual Fitting Room is a research
                  project I published during my undergraduate studies, later
                  released on SSRN.
                </li>
                <li>
                  Built with Unity 3D and ARKit, it demonstrates how body
                  tracking and 3D garment simulation can let users try on
                  clothes digitally in real time.
                </li>
                <li>
                  The paper details the motivation, design, and implementation
                  of the prototype, showing how AR can reduce online shopping
                  returns while improving user confidence.
                </li>
                <li>
                  It also outlines future directions like recommendation
                  systems, motion capture, and Android support, positioning AR
                  try-on as a powerful innovation in e-commerce.
                </li>
              </ul>
            </div>
            <footer>
              {" "}
              <button className="button" onClick={() => openModal(pdfs[4])}>View Doc</button>{" "}
            </footer>
          </div>
        </ScrollAnimation>
      </div>
       {/* Modal */}
      {modalOpen && pdfUrl && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            animation: "modalFadeIn 0.3s ease"
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 8,
              maxWidth: "90vw",
              maxHeight: "90vh",
              boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              position: "relative",
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "transparent",
                border: "none",
                fontSize: 24,
                cursor: "pointer",
              }}
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <iframe
              src={pdfUrl}
              title="PDF Preview"
              style={{ width: "70vw", height: "80vh", border: "none" }}
            />
          </div>
        </div>
      )}
    </Container>
  );
}
