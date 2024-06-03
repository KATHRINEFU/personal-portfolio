import { Container, Row, Col } from "react-bootstrap"
import { Photos } from "./Gallery"
import catImg1 from "../assets/cat/cat1.jpg"
import catImg2 from "../assets/cat/cat2.jpg"
import catImg3 from "../assets/cat/cat3.jpg"
import catImg4 from "../assets/cat/cat4.jpg"
import catImg5 from "../assets/cat/cat5.jpg"
import catImg6 from "../assets/cat/cat6.jpg"

export const Life = () => {
    const likeList = [
        'travel',
        'literature',
        'movies',
        'swimming',
        'photography',
        'baking',
        'painting',
        'animals',
        'my bed',
        'families and friends',
    ]

    const dreamList = [
        'having cats and dogs',
        'openning a bookstore with cafe',
        'openning an animal caring center',
        'developing an APP',
        'starting my own business',
        'living with friends',
        'living near the sea',
        'studying Talot',
        'having Teleportation super power',
        'being free, happy, and independent'
    ]

    const movieList = [
        'Before Sunrise',
        '重慶森林  (Chungking Express)', 
        'Love Actually', 
        '君の名は (Your Name)', 
        "Hachi: A Dog's tail",
        'Titanic',
        'Midnight Paris',
        '無間道 (Infernal Affairs)',
        'La Boum',
        'Dead Poets Society'
    ]

    const bookList = [
        'The Remains of the Day by Kazuo Ishiguro',
        'The Comfort of Strangers by Ian McEwan',
        'The Postman Always Rings Twice by James M Cain',
        'What Are You Looking At?: The Surprising, Shocking, and Sometimes Strange Story of 150 Years of Modern Art by Will Gompertz',
        'Narziß und Goldmund by Hermann Karl Hesse',
        'In Cold Blood by Truman Capote',
        '我想做一个能在你葬礼上描述你一生的人 by 贾平凹',
        '午夜降临前抵达 by 刘子超',
    ]

    const catImageList = [
        catImg1,
        catImg2,
        catImg3,
        catImg4,
        catImg5,
        catImg6,
    ]

    return (
        <section className="life" id="life">
            <Photos/>
            <Container>
                <Row>
                    <Col>
                        <h2>Life</h2>
                    </Col>
                </Row>
                <Row>
                    <Col ms={5}>
                        <h3> Something I particularly like ...</h3>
                        <ul>
                            {likeList.map(item => <li>{item}</li>)}
                        </ul>
                    </Col>
                    <Col ms={5}>
                        <h3> Something I dreamed of ...</h3>
                        <ul>
                            {dreamList.map(item => <li>{item}</li>)}
                        </ul>
                    </Col>
                </Row>
                <Row>
                <Col ms={5}>
                        <h3> Some movies I watched many times ...</h3>
                        <ul>
                            {movieList.map(item => <li>{item}</li>)}
                        </ul>
                    </Col>
                    <Col ms={5}>
                        <h3> Some books I recently read ...</h3>
                        <ul>
                            {bookList.map(item => <li>{item}</li>)}
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <h2>My best friend, my daughter, my dream come true</h2>
                        <h3>Chinese Name: 汤圆, English Name: Macchi, born in 3/1/2023, became my family member in 4/1/2024</h3>
                    </Row>
                    <Row>
                        <Col className="imageColumn">
                            <img src={catImageList[0]} alt="cat"/>
                        </Col>
                        <Col className="imageColumn">
                            <img src={catImageList[1]} alt="cat"/>
                        </Col>
                        <Col className="imageColumn">
                            <img src={catImageList[2]} alt="cat"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="imageColumn">
                            <img src={catImageList[3]} alt="cat"/>
                        </Col>
                        <Col className="imageColumn">
                            <img src={catImageList[4]} alt="cat"/>
                        </Col>
                        <Col className="imageColumn">
                            <img src={catImageList[5]} alt="cat"/>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </section>
    )
}