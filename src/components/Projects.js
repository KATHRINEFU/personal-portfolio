import { Container, Row, Col, TabContainer, TabContent, TabPane, Nav} from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/furrywayhome.jpeg"
import projImg3 from "../assets/img/katechat.png"
import Skills from "./SkillBar"
import { Education } from "./Education"
import { Experience } from "./Experience"

export const Projects = () => {
    const projects = [
        {
            title: 'MyRadiology360',
            description: 'A mobile app for radiology education',
            techStack: 'Flutter | Dart | Firebase | Figma | Jira',
            imgUrl: projImg1,
            github: 'https://github.com/KATHRINEFU/MyRadiology360'
        },
        {
            title: 'Furry Way Home',
            description: 'A website for animal adoption with virtual pet raising game',
            techStack: 'Python | Django | SQLLite | MySQL | Docker | AWS',
            imgUrl: projImg2,
            github: 'https://github.com/KATHRINEFU/FurryWayHome'
        },
        {
            title: 'Kate Chat',
            description: 'A iOS app for realtime message',
            techStack: 'Swift | MessageKit',
            imgUrl: projImg3,
            github: 'https://github.com/KATHRINEFU/KateChat'
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2> Work </h2>
                    <ul className="project-summary">
                        <li>I'm a software engineer seeking moonshot in fullstack/backend positions. </li>
                        <li>I'm also Carnegie Mellon University class of 2023 M.S. in Information System Management.</li>
                        <li>My primary interests have been web development, iOS development, machine learning, product management and the list is still growing. </li>
                        <li>I am open to software engineer/data science/startup opportunities. If you think I'm a good fit, please contant me at yuehaofu207@gmail.com</li>
                    </ul>
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
                                <Education/>
                            </TabPane>
                            <TabPane eventKey="third">
                                <Experience/>
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