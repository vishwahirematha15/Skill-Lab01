// Skills.js
import React from 'react';
import './Skills.css';

const skillsData = [
    { name: 'Python', imageUrl: 'https://analyticsindiamag.com/wp-content/uploads/2020/07/python-logo.png' }, 
    { name: 'HTML', imageUrl: 'https://img.blogs.es/anexom/wp-content/uploads/2014/07/HTML5.jpg' },
    { name: 'CSS', imageUrl: 'https://th.bing.com/th/id/OIP.PMv1xxmgpeiBQAwJNWItpgAAAA?rs=1&pid=ImgDetMain' },
    { name: 'Javascript', imageUrl: 'https://th.bing.com/th/id/OIP.Oag0dh4MINdG_qxOzJMoiwHaIB?rs=1&pid=ImgDetMain' },
    { name: 'React', imageUrl: 'https://th.bing.com/th/id/OIP.uf5Wr4c5nlbGbTR0XyGUvQHaEO?rs=1&pid=ImgDetMain' },
    { name: 'Next.js', imageUrl: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png' }
];

function Skills() {
    return (
        <section id="skills" className="skills-container">
            <h2 className="skills-title">SKILLS </h2>
            <div className="skills-list">
                {skillsData.map((skill, index) => (
                    <div key={index} className="skill">
                        <img src={skill.imageUrl} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
