import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from 'react';


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scroll, seScrolled] = useState(false)

    useEffect(() =>{
        const onScoll = () =>{
            if(window.scrollY>50){
                seScrolled = true
            }else{
                seScrolled(false)
            }
        }

        window.addEventListener("scroll", onScoll)
        return () => window.removeEventListener("scroll", onScoll)
    },[])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

    return (
        <Navbar bg="light" expand="lg" className={scroll? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt='Logo'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                    <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=>{onUpdateActiveLink('home')}}>Home</Nav.Link>
                    <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link': 'navbar-link'} onClick={()=>{onUpdateActiveLink('work')}}>Work</Nav.Link>
                    <Nav.Link href="#life" className={activeLink === 'life' ? 'active navbar-link': 'navbar-link'} onClick={()=>{onUpdateActiveLink('life')}}>Life</Nav.Link>
                </Nav>
                <span className='navbar-text'>
                    <div className='social-icon'>
                        <a href='#'><img src={''} alt=''></img></a>
                        <a href='#'><img src={''} alt=''></img></a>
                        <a href='#'><img src={''} alt=''></img></a>
                    </div>
                    <button className='vvd' onClick={()=> {console.log("contact me")}}>
                        <span>Let's connect</span>
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}