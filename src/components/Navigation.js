import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from 'react';
import navIcon1 from '../assets/img/linkedin.svg'
import navIcon2 from '../assets/img/instagram.svg'
import navIcon3 from '../assets/img/bilibili.svg'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() =>{
        const onScoll = () =>{
            if(window.scrollY>50){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScoll)
        return () => window.removeEventListener("scroll", onScoll)
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

    return (
        <Router>
        <Navbar expand="lg" className={scrolled? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" spy={true} smooth={true} className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=>{onUpdateActiveLink('home')}}>Home</Nav.Link>
                    <Nav.Link href="#work" spy={true} smooth={true} className={activeLink === 'work' ? 'active navbar-link': 'navbar-link'} onClick={()=>{onUpdateActiveLink('work')}}>Work</Nav.Link>
                    <Nav.Link href="#life" spy={true} smooth={true} className={activeLink === 'life' ? 'active navbar-link': 'navbar-link'} onClick={()=>{onUpdateActiveLink('life')}}>Life</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='https://www.linkedin.com/in/yuehao-kate-fu-87b5bb1b2/'><img src={navIcon1} alt=''></img></a>
                        <a href='https://www.instagram.com/fuyuehaokate/'><img src={navIcon2} alt=''></img></a>
                        <a href='https://space.bilibili.com/176476693?spm_id_from=333.1007.0.0'><img src={navIcon3} alt=''></img></a>
                    </div>
                    <HashLink to='#connect'>
                        <button className="vvd"><span>Let's Connect</span></button>
                    </HashLink>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </Router>
    )
}