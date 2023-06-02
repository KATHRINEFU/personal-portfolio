import { Container, Row, Col } from "react-bootstrap"
import { EduCard } from "./EduCard"
import cmuImg from "../assets/img/cmu.png"
import sufeImg from "../assets/img/sufe.png"
import fduImg from '../assets/img/fdu.png'

export const Education = () => {

    const eduList = [
        {
            school: 'Carnegie Mellon University',
            year: '2023',
            degree: 'MS in Information System Management',
            img: cmuImg,
            course: ['Foundation in computer systems', 'Distributed system', 'Web application development', 
            'Coding Bootcamp', 'Machine learning', 'Unstructured Data Analysis', 'NoSQL databases', 'System Design']
        },
        {
            school: 'Shanghai University of Finance and Economics',
            year: '2021',
            degree: 'BS in Information Management and System',
            img: sufeImg,
            course: ['C++ Programming', 'Java Programming', 'Data Mining', 'Database Management', 'Data Warehouse',
            'Investment Science', 'Stochastics', 'Discrete Math', 'Statistics', 'Calcus']
        },
        {
            school: 'Fudan University',
            year: '2020',
            degree: 'Shanghai Cross-University Minor Certificate of Finance',
            img: fduImg,
            course: ['Microeconomics', 'Macroeconomics', 'Financial Market', 'International Trade', 'International Finance',
            'Monetary Economics', 'Corporate Finance', 'Businessand Operation of Commercial Banks']
        }
    ]
    return (
        <section>
            <Container className="educard">
                {eduList.map((edu, index) => {return <EduCard key={index} {...edu}/>})}
            </Container>
        </section>
    )
}