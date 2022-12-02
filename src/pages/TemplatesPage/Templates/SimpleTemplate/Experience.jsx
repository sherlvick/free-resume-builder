import React from 'react';
import './Experience.scss';

export const Experience = React.memo(({experience}) => {

  return (
    <div className='simple-template__experience'>
    <h2 className="sideheading">Experience</h2>
      <hr className='line'></hr>
      {experience.length > 0 && experience.map((company) => {
        return <div key={company.companyName} className='simple-template__experience__company'>
        <h3 className="simple-template__experience__company__title">{`${company.designation} (${company.companyName})`}</h3>
        <div className='simple-template__experience__company__projects'>
          <p><strong>Projects : {company.projects}</strong></p>
          <ul className='simple-template__experience__company__projects__description'>
            {company.rolesResponsibilites && company.rolesResponsibilites.map((role,i) => {
                return <li key={`r${i}`}>{role}</li>
            })}
          </ul>
        </div>
      </div>
      })}
      
    </div>
  )
});
