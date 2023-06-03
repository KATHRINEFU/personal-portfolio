import { Col } from "react-bootstrap"

export const ProjectCard = ({title, techStack, description, imgUrl, github}) => {
    return (
        <Col sm = {6} md={4}>
            <div className="proj-imgbx">
                <a href={github}>
                <span class="project-link"></span>
                </a>
                <img className="proj-image" src={imgUrl} alt="project-image"></img>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{techStack}</p>
                </div>
            </div>

        </Col>
    )
}