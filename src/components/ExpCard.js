import {Row, Col} from "react-bootstrap"

export const ExpCard = ({company, role, detail, tenure, img, url}) => {
    return (
        <Row>
            <Col>
            <h3>{role}</h3>
            <p>{tenure}</p>
            </Col>
            <Col>
                <a href={url}>{company}</a>
                <hr></hr>
                <p>{detail}</p>
            </Col>
            <img className="company-image" src={img} alt="company image"></img>
        </Row>
    )
}