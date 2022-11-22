import React from "react";
import NavBar from "../components/Navbar";
export default function WithLayout(ActualComponent) {
  return function () {
    return (
      <div>
        <NavBar />
        <ActualComponent></ActualComponent>
      </div>
    );
  };
}
