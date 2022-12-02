import React from 'react';
import './Languages.scss';

export const Languages = React.memo(({languages}) => {

    const convertLevelToProficency = (val) => {
        switch(val){
            case 1:
            case 2: return "Beginner";
            break;
            case 3: return "Intermediate";
            break;
            case 4:
            case 5: return "Fluent";
            break;
            default:
                return;
        }
    }

  return (
    <div className='simple-template__languages'>
        <h2 className="sideheading">Languages</h2>
          <hr className='line'></hr>
          
          <div className='simple-template__skills__container'>
            {languages && languages.map((language,i) => {
                return <div className='simple-template__languages__item'>
                <p>{language.name}</p>
                {language.level && <p>{convertLevelToProficency(language.level)}</p>}
              </div>
            })}
        </div>
        </div>
  )
});
