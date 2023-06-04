import { Container, Row, Col } from "react-bootstrap";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ScrollToTop from "react-scroll-to-top";

export const Contact = () => {
  
  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
            <Col>
            <ScrollToTop color="#BE5A83"/>
            </Col>
        </Row>
        <Row>
            <Col>
            <h2> Nice to meet you! Let's connect</h2>
            </Col>
        </Row>
        <Row style={{marginTop:'20px', marginBottom: '20px'}}>
            <Col>
            <LocationOnIcon/>
            <h3>Find me at </h3>
            <p>Carnegie Mellon University, Pittsburgh, PA, 15232</p>
            </Col>
            <Col>
            <EmailIcon/>
            <h3>Email me at </h3>
            <p>yuehaofu207@gmail.com</p>
            </Col>
            <Col>
            <LinkedInIcon/>
            <h3>Connect with me at</h3>
            <a href="https://www.linkedin.com/in/yuehao-kate-fu-87b5bb1b2/">My Linkedin Profile</a>
            </Col>
        </Row>
        <Row>
            <Col>
            <span className="footer">Created by Kate Fu | With ReactJS | Last Updated: 2023/6/4</span><br/>
            <span className="footer">Copyright 2023. All Rights Reserved</span>
            </Col>
        </Row>
      </Container>
    </section>
  )
}