import { Container, Row, Col } from "react-bootstrap"
import { Photos } from "./Gallery"

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
            </Container>
        </section>
    )
}