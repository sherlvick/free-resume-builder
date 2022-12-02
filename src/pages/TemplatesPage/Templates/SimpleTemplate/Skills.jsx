import React from 'react';
import './Skills.scss';

export const Skills = React.memo(({skills}) => {
    console.log(skills);

    const convertLevelToText = (val) => {
        switch(val){
          case 1:
          case 2: return "Beginner";
          break;
          case 3: return "Intermediate";
          break;
          case 4: return "Expert";
          break;
          case 5: return "Advanced";
          break
          default:
            return;
        }
    }

  return (
    <div className='simple-template-skills'>
        <h2 className="sideheading">Skills</h2>
          <hr className='line'></hr>
          <div className='simple-template__skills__container'>
          {skills && skills.map((skill,i) => {
            return <div key={`s${i}`} className='simple-template__skills__item'>
            <p>{skill.name}</p>
            {skill.level && <p>{convertLevelToText(skill.level)}</p>}
          </div>
          })}
        </div>
  </div>)
});
