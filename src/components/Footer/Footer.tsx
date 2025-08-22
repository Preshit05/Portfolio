import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import whatsapp from "../../assets/whatsapp.svg";
import instagramIcon from "../../assets/instagram.svg";
import dataSource from "../../data/site_data.json";

export function Footer() {
  return (
    <Container className="footer">
      <a href={dataSource.footer.portfolioURL} className="logo">
        <span>{dataSource.footer.portfolioName}</span>
      </a>
      <div>
        <p>
          {dataSource.footer.footer_text} <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        <a
          href={dataSource.footer.linkedin_url}
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href={dataSource.footer.whatsApp_url}
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href={dataSource.footer.instagram_url}
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  );
}
