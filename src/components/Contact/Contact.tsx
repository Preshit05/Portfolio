import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import dataSource from '../../data/site_data.json';

export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>{dataSource.contact.title}</h2>
        <p>{dataSource.contact.title1}</p>
        <p>{dataSource.contact.title2}</p>
      </header>
      <div className="contacts">
        <div>
        <a href={dataSource.contact.mailAddr}><img src={emailIcon} alt="Email" /></a> 
          <a href={dataSource.contact.mailAddr}>{dataSource.contact.emailMsg}</a>
        </div>
        <div>
        <a href={dataSource.contact.phoneLink}><img src={phoneIcon} alt="Phone No" /></a>
          <a href={dataSource.contact.phoneLink}>{dataSource.contact.phoneNumber}</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}