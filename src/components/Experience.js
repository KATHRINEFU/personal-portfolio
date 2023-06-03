import { Container } from "react-bootstrap"
import { ExpCard } from "./ExpCard"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import bayerImg from "../assets/img/bayer.png"
import senueloImg from "../assets/img/senuelo.png"

export const Experience = () => {
    const expList = [
        {
          company: 'Bayer Healthcare',
          role: 'Software Engineer, Capstone',
          detail:"Developed an educational mobile application for Bayer Healthcare Radiology Department, utilizing Flutter for development, Figma for UI design, Firebase as the backend database, and following an agile methodology using Jira for project management. ",
          tenure: "Jan 2023 - May 2023",
          img: bayerImg,
          url: 'https://www.radiologysolutions.bayer.com/'
        },
        {
          company: 'Senuelo Advertising',
          role: 'Software Engineer, Intern',
          detail: [
            'Implemented a web service based on GPT-3 as an internal system to perform AI article generation from user input prompt',
            'Performed data crawling, cleansing, and applied natural language processing model (BERT) for 10k+ published blog posts to categorize keywords, identify hot trends and finetune the generated article',
            'Helped the company in less reliance on external article generation products, thereby reducing purchasing costs by 5%'
          ],
          tenure: 'May 2022 - July 2022',
          img: senueloImg,
          url: 'https://senueloadvertising.com.au/'
        },
      ]

      return (

        <VerticalTimeline
            lineColor="#B8B8B8"
            className = "vertical-timeline"
        >
            {expList.map((exp, index) => {return (
                <VerticalTimelineElement
                     className="vertical-timeline-element--work"
                     contentStyle={{ background: '#D6E8DB', color: '#121212' }}
                     contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                     date={exp.tenure}
                     iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                     icon={exp.img}
                     key = {index}
                 >
                     <h3 className="vertical-timeline-element-title">{exp.role}</h3>
                     <a className="vertical-timeline-element-subtitle" href={exp.url}>{exp.company}</a>
                     <p>
                        {exp.detail}
                     </p>
                 </VerticalTimelineElement>
            )})}
        </VerticalTimeline>


        // <section>
        //     <Container className="expcard">
                 
        //     </Container>
        // </section>
      )
}