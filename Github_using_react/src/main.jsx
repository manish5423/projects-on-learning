import React ,{useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { useState } from "react";

function Github() {
  return (
    <div>

        <Header></Header>
        <Body></Body>
    </div>
  )
}


const render = ReactDOM.createRoot(document.getElementById("root"));
render.render(<Github />);