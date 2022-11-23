import React from "react";
import NavBar from "../components/NavBar/Navbar";
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
