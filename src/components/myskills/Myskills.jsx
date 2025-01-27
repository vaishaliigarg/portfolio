import React from 'react';
import skillsData from '../../index/data.json'; // Adjust the path based on your file structure
import './myskills.css'; // Import CSS file for styling

// Importing images
import javaImage from '../../img/java.jpg';
import cppImage from '../../img/cpp.png';
import htmlImage from '../../img/html.png';
import cssImage from '../../img/css.jpg';
import jsImage from '../../img/js.jpg';
import mongodbImage from '../../img/mongodb.jpg';
import expressImage from '../../img/express.png';
import reactImage from '../../img/react.png';
import nodeImage from '../../img/node.png';
import androidImage from '../../img/android.png';

const Myskills = () => {
  return (
    <div className="skills">
      <h2 className='shd'>Skills</h2>
      <ul className="skills-list">
        {skillsData.skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {renderSkillImage(skill.title)}
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Helper function to render images based on skill title
const renderSkillImage = (title) => {
  switch (title) {
    case 'Java':
      return <img src={javaImage} alt="Java" />;
    case 'C++':
      return <img src={cppImage} alt="C++" />;
    case 'HTML':
      return <img src={htmlImage} alt="HTML" />;
    case 'CSS':
      return <img src={cssImage} alt="CSS" />;
    case 'JavaScript':
      return <img src={jsImage} alt="JavaScript" />;
    case 'MongoDB':
      return <img src={mongodbImage} alt="MongoDB" />;
    case 'Express.js':
      return <img src={expressImage} alt="Express.js" />;
    case 'React.js':
      return <img src={reactImage} alt="React.js" />;
    case 'Node.js':
      return <img src={nodeImage} alt="Node.js" />;
    case 'Android Development':
      return <img src={androidImage} alt="Android Development" />;
    default:
      return null;
  }
}

export default Myskills;
