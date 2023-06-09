import React from "react";

function SkillsBar () {

    const skillList = [
        {
            skill: 'Java',
            name: 'java',
            percentage: '90%'
        },
        {
            skill: 'Python',
            name: 'python',
            percentage: '90%'
        },
        {
            skill: 'JavaScript',
            name: 'javascript',
            percentage: '85%'
        },
        {
            skill: 'C',
            name: 'c',
            percentage: '50%'
        },
        {
            skill: 'R',
            name: 'r',
            percentage: '50%'
        },
        {
            skill: 'HTML/CSS',
            name: 'html',
            percentage: '85%'
        },
        {
            skill: 'Django',
            name: 'django',
            percentage: '85%'
        },
        {
            skill: 'ReactJS',
            name: 'reactjs',
            percentage: '85%'
        },
        {
            skill: 'Spring',
            name: 'spring',
            percentage: '50%'
        },
        {
            skill: 'SpringBoot',
            name: 'springboot',
            percentage: '50%'
        },
        {
            skill: 'Ruby on Rails',
            name: 'rubyonrails',
            percentage: '40%'
        },
        {
            skill: 'Flutter',
            name: 'flutter',
            percentage: '70%'
        },
        {
            skill: 'Swift',
            name: 'swift',
            percentage: '60%'
        },
        {
            skill: 'Restful API',
            name: 'restfulapi',
            percentage: '50%'
        },
        {
            skill: 'SQL',
            name: 'sql',
            percentage: '80%'
        },
        {
            skill: 'MySQL/SQLServer/SQLLite',
            name: 'mysql',
            percentage: '80%'
        },
        {
            skill: 'MongoDB/Redis/Neo4j',
            name: 'mongodb',
            percentage: '60%'
        },
        {
            skill: 'Docker',
            name: 'docker',
            percentage: '60%'
        },
        {
            skill: 'Amazon Web Service',
            name: 'aws',
            percentage: '50%'
        },
        {
            skill: 'Heroku',
            name: 'heroku',
            percentage: '50%'
        },
        {
            skill: 'Machine Learning (Classification, Prediction, Natural Language Processing)',
            name: 'ml',
            percentage: '80%'
        },
        {
            skill: 'Data Analysis',
            name: 'da',
            percentage: '70%'
        },
        {
            skill: 'Data Visualization (Matplotlib, Seaborn, PowerBI, Tableau)',
            name: 'dv',
            percentage: '70%'
        },
        {
            skill: 'Hadoop/Spark',
            name: 'hadoop',
            percentage: '30%'
        },
    ]
return (
    <div className="container">
        {skillList.map(item => {
            return (
                <div key={item.name} className="skill-box">
                <span className="title">{item.skill}</span>
                <div className="skill-bar">
                    <span className={"skill-per "+item.name}>
                        <span className="tooltip">{item.percentage}</span>
                    </span>
                </div>
                </div>
            )
        })}
    </div>
    )
}

 export default SkillsBar;