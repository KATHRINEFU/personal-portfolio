import { Container, Row, Col } from "react-bootstrap"
import { Photos } from "./Gallery"

export const Life = () => {
    const likeList = [
        'travel',
        'reading',
        'movies',
        'animals',
        'swimming',
        'tennis',
        'photography',
        'vlog editting',
        'baking',
        'writing dairies'
    ]

    const dreamList = [
        'have cats and dogs',
        'openning a bookstore',
        'openning a cafe',
        'openning an animal caring center',
        'developing an APP',
        'living with friends',
        'living in Paris or any other romantic European cities',
        'having Teleportation super power',
        'studying Talot'
    ]

    const movieList = [
        'Before Sunrise',
        '重慶森林  (Chungking Express)', 
        'Love Actually', 
        '君の名は (Your Name)', 
        "Hachi: A Dog's tail",
        'Titanic',
        'Intersteller',
        '無間道 (Infernal Affairs)',
        'Roman Holiday',
        'Dead Poets Society'
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
                        <h3> Something I dreamed of ...</h3>
                        <ul>
                            {dreamList.map(item => <li>{item}</li>)}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}