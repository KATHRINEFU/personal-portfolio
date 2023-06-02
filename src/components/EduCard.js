import { Row, Col } from "react-bootstrap"
export const EduCard = ({school, year, degree, img, course}) => {
    return (
        <Row style={{paddingTop:20, paddingButtom: 30}}>
            <Col xs = {7}>
                <h3>{school + ', ' + year}</h3>
                <p>{degree}</p>
                <img className="school-img" src={img} alt="school image"/>
            </Col>
            <Col>
                <ul>
                    {course.map(item => <li>{item}</li>)}
                </ul>
            </Col>
            <hr class="mt-5 mb-5"></hr>
        </Row>
    )
}