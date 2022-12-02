import React from "react";
import "./TemplatesPage.scss";
import { useNavigate} from "react-router-dom";
import { TemplatesData } from "../../constants/index";


const TemplatesPage = React.memo(() => {

  const navigate = useNavigate();
  const navigateHandler = (name) => {
    navigate(`/templates/${name}`);
  };
  return (
    <section className="templates-section">
      <div className="templates-section__header">
        <h1>Choose a Template for your CV</h1>
      </div>
      <div className="templates-container">
        {TemplatesData &&
          TemplatesData.map((item) => {
            return (
              <div
                onClick={() => navigateHandler(item.name)}
                key={item.id}
                className="template-container"
              >
                <img
                  className="template-container__img"
                  src={item.image}
                  alt={item.name}
                />
              </div>
            );
          })}
      </div>
    </section>
  )
});

export default TemplatesPage;
