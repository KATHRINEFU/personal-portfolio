import { Container, Carousel } from "react-bootstrap";
import photo1 from "../assets/gallery/photo1.JPG"
import photo2 from "../assets/gallery/photo2.JPG"
import photo3 from "../assets/gallery/photo3.jpg"
import photo4 from "../assets/gallery/photo4.jpg"
import photo5 from "../assets/gallery/photo5.jpg"
import photo6 from "../assets/gallery/photo6.jpg"
import photo7 from "../assets/gallery/photo7.jpg"
import photo8 from "../assets/gallery/photo8.jpg"
import photo9 from "../assets/gallery/photo9.jpg"
import photo10 from "../assets/gallery/photo10.jpg"
import photo11 from "../assets/gallery/photo11.jpg"
import photo12 from "../assets/gallery/photo12.jpg"
import photo13 from "../assets/gallery/photo13.jpg"
import photo14 from "../assets/gallery/photo14.jpg"
import photo15 from "../assets/gallery/photo15.jpg"
import photo16 from "../assets/gallery/photo16.jpg"
import photo17 from "../assets/gallery/photo17.jpg"

export const Photos = () => {

    const images = [
      {
        src: photo17,
        caption: "Seattle | Seattle Downtown",
        date: "May 2024",
      },
      {
        src: photo16,
        caption: "Kilington | Mount Kilington",
        date: "Jan 2024",
      },
      {
        src: photo15,
        caption: "Monterey | 17 miles",
        date: "Dec 2023",
      },
      {
        src: photo14,
        caption: "San Francisco | Golden Gate Bridge",
        date: "Dec 2023",
      },
      {
        src: photo1,
        caption: "Los Angeles | Santa Monica",
        date: "May 2023"
      }, 
      {
        src: photo2,
        caption: "Toronto | Nigaria Falls",
        date: "Jan 2023",
      },
      {
        src: photo3,
        caption: "New York | Empire State Building",
        date: "May 2023",
      },
      {
        src: photo4,
        caption: "Washington DC | White House",
        date: "May 2023",
      },
      {
        src: photo5,
        caption: "Guanajuato | Mountain Pipila",
        date: "Mar 2023",
      },
      {
        src: photo6,
        caption: "Cancun | Hotel Zone",
        date: "Mar 2023",
      },
      {
        src: photo7,
        caption: "Tasmania | Wineglass Bay",
        date: "Mar 2022",
      },
      {
        src: photo8,
        caption: "New York | Brooklyn Bridge",
        date: "Oct 2022",
      },
      {
        src: photo9,
        caption: "Brisbane | Tamborine Mountain",
        date: "Aug 2022",
      },
      {
        src: photo10,
        caption: "Perth | Lancester",
        date: "May 2022",
      },
      {
        src: photo11,
        caption: "Adelaide | Victoria Bay",
        date: "Feb 2022",
      },
      {
        src: photo12,
        caption: "Hobart | Mountain Willington",
        date: "Mar 2022",
      },
      {
        src: photo13,
        caption: "Pittsburgh | Mountain Washington",
        date: "Oct 2022",
      },
    ]
    
    return (
        <Carousel>
            {images.map((image, index) => {return (
                <Carousel.Item key={index}>
                <img
                  className="d-block w-100 gallery-image"
                  src= {image.src}
                  alt="photo"
                />
                <Carousel.Caption>
                  <h4>{image.caption + ', ' + image.date}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            )})}
        </Carousel>
    )
}
