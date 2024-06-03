import bayerImg from "../assets/img/bayer.png"
import senueloImg from "../assets/img/senuelo.png"
import impactImg from "../assets/img/impact.svg"
import accentureImg from "../assets/img/accenture.png"
import vechainImg from "../assets/img/vechain.png"
import spurImg from "../assets/img/SpurIcon.png"
import tiktokImg from "../assets/img/tiktok.png"

//https://www.npmjs.com/package/react-chrono#scrollable


export const Experience = () => {
    const expList = [
        {
          company: 'Bytedance (Tiktok)',
          role: 'Software Development Engineer in Test',
          detail:"Support feature delivery for Tiktok global e-commerce seller center to build a high-quality platform for TikTok sellers around the world. Authored test automation framework for interface testing and end-to-end testing.",
          tenure: "Mar 2024 - Present",
          img: tiktokImg,
          url: 'https://www.tiktok.com/en/',
          techstack: 'Python | TypeScript | End-to-end testing | Interface testing | Test automation | Cross-functional communication'
        },
        {
          company: 'SpurSMB',
          role: 'Fullstack Software Engineer, Intern',
          detail:" Developed web platform using React for frontend, NextJS for backend. Srapped web info and created backend endpoints. Created multiple react hooks, redux slices for better API calls and state manegement. ",
          tenure: "Jul 2023 - Nov 2023",
          img: spurImg,
          url: 'https://www.spursmb.com/',
          techstack: 'JavaScript | TypeScript | NodeJS | NextJS | React | HTML | CSS | Azure'
        },
        {
          company: 'Bayer Healthcare',
          role: 'Software Engineer, Capstone',
          detail:"Developed an educational-oriented mobile app for Bayer Radiology, utilizing Flutter for development, Figma for UI design, Firebase as the backend database, and following an agile methodology using Jira for project management. ",
          tenure: "Jan 2023 - May 2023",
          img: bayerImg,
          url: 'https://www.radiologysolutions.bayer.com/',
          techstack: 'Flutter | Dart | Firebase | Figma | Jira'
        },
        {
          company: 'Senuelo Advertising',
          role: 'Software Engineer, Intern',
          detail: 'Implemented an internal web service using GPT-3 for AI article generation, involving data crawling, NLP (BERT) on 10k+ blog posts for keyword categorization and trend identification, reducing reliance on external products and cutting costs by 5%.',
          tenure: 'May 2022 - July 2022',
          img: senueloImg,
          url: 'https://senueloadvertising.com.au/',
          techstack: 'Python | FastAPI | JavaScript | HTML | GPT-3 | Restful API'
        },
        {
            company: 'Impact',
            role: 'Solution Architect, Intern',
            detail: 'Communicated with potential clients, offering technical integration plans using JavaScript and Restful API, collaborated with 10+ international companies such as Adidas, DHGate, and OnePlus to integrate their business with the Impact system, and successfully resolved client issues through Postman API data analysis, resulting in faster onboarding, successful integrations, and a 20% reduction in client resolution time.',
            tenure: 'Jan 2021 - May 2021',
            img: impactImg,
            url: 'https://impact.com/',
            techstack: 'JavaScript | Restful API | Solution Architect | Client Communication'
          },
          {
            company: 'Accenture',
            role: 'Information Security, Intern',
            detail: 'Conducted security audits, designed effective maintenance schemes, prepared risk assessment reports, monitored network abnormalities, issued GDPR compliance warnings, and mitigated 5 high-risk security issues to protect information assets and ensure data privacy.',
            tenure: 'Jun 2020 - Dec 2020',
            img: accentureImg,
            url: 'https://www.accenture.com/us-en',
            techstack: 'Information Security | Data Privacy | GDPR | Audit | Internal Management'
          },
          {
            company: 'Vechain',
            role: 'Data Analyst, Intern',
            detail: 'Automated weekly data analysis reports from multiple digital currency trading platforms, crawled and visualized VTHO trading data, forecasted growth rates using the VeChain Twin-Token Model',
            tenure: 'Jan 2020 - May 2020',
            img: vechainImg,
            url: 'https://www.vechain.org/',
            techstack: 'Python | BeautifulSoup | Data Analysis | Data Visualization | Blockchain'
          },
      ]

      return (
        <div></div>
      )
}