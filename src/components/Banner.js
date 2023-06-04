import { Container, Row, Col } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import headerImage from "../assets/photo.png"
import { useState, useEffect } from "react"

export const Banner = () => {

    const toRotate = ["Software Engineer", "Web Developer", "UI/UX Designer", "iOS Developer"]
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('Software Engineer')
    const [delta, setDelta] = useState(300-Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updateText = isDeleting? fullText.substring(0, text.length-1): fullText.substring(0, text.length+1)
        
        setText(updateText)

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if (isDeleting && updateText === ''){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setDelta(200)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My Profolio</span>
                        <h1>{"Hi! I'm Kate Fu"}</h1>
                        <p> A typical Virgo + ESFJ.</p>
                        <p> Love travel, literature, films, and outdoor sports</p>
                        <p> A recent graduate from Carnegie Mellon University</p>
                        <p> Currently searching for a software engineer job</p>
                        <button onClick={()=> console.log("learn more")}>Learn more about me! <ArrowRightCircle size={25}/></button>
                    </Col>

                    <Col xs={12} md={6} xl={5}>
                        <Row>
                            <img className="header-image" src={headerImage} alt="header image"></img>
                        </Row>
                        <Row>
                            <span className="wrap">{text}</span>
                        </Row>
                        <Row>
                            <p>yuehaofu207@gmail.com</p>
                            <a class="resume-btn" href="YuehaoFu.pdf" title="" download>RESUME</a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}