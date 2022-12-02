import React from "react";
import { useParams } from "react-router-dom";
import SimpleTemplate from "./SimpleTemplate/SimpleTemplate";

const Template = () => {
  const {id} = useParams();


  function getComponent(id) {
    switch (id) {
      case "SimpleTemplate":
        return <SimpleTemplate />;
      default:
        return <h1>Template Not Found</h1>;
    }
  }

  return <div>
    {getComponent(id)}
    </div>;
};

export default Template;
