import React from "react";
import './Education.scss';

export const Education = React.memo(({ education }) => {


  return (
    <div className="education">
      <h2 className="education__heading">Education</h2>
      <hr className="line"></hr>
      {education && education.map((course,i) => {
        return  <div className="simple-template__education__course">
        <div class="flex-container">
          <h3 className="simple-template__education__course__title">{`${course.courseName} ${course.specification ? "(" + course.specification + ")" : ""} `}
          </h3>
          <p>{course.endYear}</p>
        </div>
        <div className="simple-template__education__course__details">
            {`${course.collegeName}, ${course.collegeLocation}, ${course.courseName}, percentage (${course.percentage})`}
        </div>
      </div>
      })}
     
    </div>
  );
});
