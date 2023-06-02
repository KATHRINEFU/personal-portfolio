import { Container, Row, Col, TabContainer, TabContent, TabPane, Nav} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"
import Skills from "./SkillBar"

export const Projects = () => {
    const projects = [
        {
            title: 'MyRadiology360',
            description: 'A mobile app for radiology education',
            techStack: ['Flutter', 'Firebase'],
            imgUrl: projImg1,
        }
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2> Work </h2>
                    <p> My Professon and Career </p>
                    <TabContainer id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Education</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Experience</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Projects</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <TabContent>
                            <TabPane eventKey="first">
                            `   <Skills/>,
                            </TabPane>
                            <TabPane eventKey="second">
                            </TabPane>
                            <TabPane eventKey="third">
                            </TabPane>
                            <TabPane eventKey="fourth">
                                <Row>
                                    {projects.map((project, index) => {return <ProjectCard key={index} {...project}/>})}
                                </Row>
                            </TabPane>
                        </TabContent>
                    </TabContainer>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}