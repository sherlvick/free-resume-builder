import React, { useRef } from "react";
import "./SimpleTemplate.scss";
import { Header } from "./Header";
import { Summary } from "./Summary";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Languages } from "./Languages";
import ReactToPrint from "react-to-print";
import { ProfileContext } from "../../../../components/Context/Profile/ProfileContext";
import { useContext } from "react";

const SimpleTemplate = React.memo(() => {
  const profileData = useContext(ProfileContext);

  const { personalDetails, summary, experience, education, skills, languages } =
    profileData;

  const componentRef = useRef();

  console.log(componentRef,"ref")

  return (
    <section className="simple-template-section">
      <div className="simple-template-container" ref={componentRef}>
        <div className="template-container" >
          <Header personalDetails={personalDetails} />
          <Summary summary={summary} />
          {experience && <Experience experience={experience} />}
          <Education education={education} />
          <Skills skills={skills} />
          {languages && <Languages languages={languages} />}
        </div>
      </div>

      <ReactToPrint
        trigger={() => (
          <button className="print-button">Print this out!</button>
        )}
        content={() => componentRef.current}
      />
    </section>
  );
});

export default SimpleTemplate;
