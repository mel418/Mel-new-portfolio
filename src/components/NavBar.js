import { useEffect, useState } from "react";
import { Navbar, Container, Nav, } from "react-bootstrap";
import MELODY from '../assets/img/MELODY.svg';
import navIcon1 from '../assets/img/linkedin-svgrepo-com.svg';
import navIcon2 from '../assets/img/github-mark.svg';
import navIcon3 from '../assets/img/instagram-svgrepo-com.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={MELODY} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"> 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://linkedin.com/in/melody-gatan" rel="noreferrer" target="_blank"><img src={navIcon1} alt="" /></a>
                            <a href="https://github.com/mel418" rel="noreferrer" target="_blank"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/mel.oh.dee/" rel="noreferrer" target="_blank"><img src={navIcon3} alt="" /></a>
                        </div>
                        {/* <button className="vvd" onClick = {() => console.log('connect')}><span>Let's connect</span></button> */}
                        <button className="vvd"><a href="/Melody-Resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume Here!</a></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
