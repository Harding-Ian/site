import {Navbar, Container, Nav} from "react-bootstrap";
import { useState, useEffect} from "react";
import githubLogo from '../assets/images/github-mark-white.png';
// import linekdInLogo from '../assets/images/linkedIn-white.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() =>{
        const onScroll = () => {
            const vh = window.innerHeight / 100;
            if (window.scrollY > 70 * vh) {
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const scrollToConnect = () => {
      const connectSection = document.getElementById('connect');
      connectSection.scrollIntoView({ behavior: 'smooth' });
  };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggle-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icons">
                    <a id='github-logo' href="#"><img src ={githubLogo} alt="github"/></a>
                    {/* <a href="#"><img src ={linekdInLogo} alt="linkedIn"/></a> */}
                </div>
                <button className="contact" onClick={() => scrollToConnect()}><span>Let’s Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}