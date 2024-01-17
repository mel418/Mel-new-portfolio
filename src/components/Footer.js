import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import Logo from "../assets/img/MELODY.svg";
import navIcon1 from '../assets/img/linkedin-svgrepo-com.svg';
import navIcon2 from '../assets/img/github-mark.svg';
import navIcon3 from '../assets/img/instagram-svgrepo-com.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/melody-gatan" rel="noreferrer" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/mel418" rel="noreferrer" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/mel.oh.dee/" rel="noreferrer" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>Copyright 2023, All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}