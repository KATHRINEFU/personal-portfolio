import React from "react";
import {motion} from 'framer-motion'
import {fadeIn, staggerChildren, textVariant2, zoomIn } from "./motion";
import bayerImg from "../assets/img/bayer.png"
import senueloImg from "../assets/img/senuelo.png"
import css from "./Timeline.module.scss";

export const Timeline = () => {
  const workExp = [
    {
      company: 'Bayer Healthcare',
      role: 'Software Engineer, Capstone',
      detail:[
        "Developed an educational mobile application for Bayer Healthcare Radiology Department that aimed to help patients with disease prevention, and early detection. Thereby introducing more people into radiology earlier and increasing sales",
        "Performed the entire product lifecycle, from requirement analysis and design to development, testing, and handover ",
        "Used Flutter, a mobile framework, to develop the application, utilized Figma for UI design, integrated Firebase as the backend database, and followed the agile methodology using Jira for project management"
      ],
      tenure: "Jan 2023 - May 2023",
      place: "Pittsburgh, PA",
      img: bayerImg
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
      place: 'Adelaide, Australia',
      img: senueloImg,
    }
  ]

  return (
    <motion.section 
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
    <a className="anchor" id="work"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.experiences}`}>
          {workExp.map((exp, i) => {
            return (
              <motion.div variants={textVariant2} key={i} className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p>{exp.tenure}</p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <p>{exp.detail}</p>
                </div>
              </motion.div>
            );
          })}


          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div variants={fadeIn("down", "tween", 2, 1.5)} className={css.line}></motion.div>
            <div><div className={css.circle} style={{background: "#BE5A83"}}></div></div>
            <div><div className={css.circle} style={{background: "#E06469"}}></div></div>
            <div><div className={css.circle} style={{background: "#F2B6A0"}}></div></div>
            <div><div className={css.circle} style={{background: "#DEDEA7"}}></div></div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
  }