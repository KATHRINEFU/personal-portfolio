import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    // const skillItems = [
    //     {id: 1,name:'Web Application Development'},
    //     {id: 2,name:'Mobile Application Development'},
    //     {id: 3,name:'Machine Learning'},
    //     {id: 4,name:'Project Management'},
    // ]

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>These are my skills!<br></br> And I'm exploring more.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img className="skill-image" src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img className="skill-image" src={meter2} alt="Image" />
                                    <h5>Mobile Development</h5>
                                </div>
                                <div className="item">
                                    <img className="skill-image" src={meter3} alt="Image" />
                                    <h5>Machine learning</h5>
                                </div>
                                <div className="item">
                                    <img className="skill-image" src={meter1} alt="Image" />
                                    <h5>Project Management</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )
}