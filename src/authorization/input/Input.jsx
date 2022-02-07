import React, { useState } from "react";
import "./input.css";
import { Eye } from "./svgImport";

function Input(props) {
  const [statePass, setPassword] = useState(props.type);
  return (
    <div className="input">
      <b>{props.text}</b>
      <input type={statePass} size="40" placeholder={props.value} />
      {props.type === "password" ? (
        <Eye
          onClick={() =>
            props.type === "password"
              ? setPassword(statePass === "password" ? "text" : "password")
              : props.type
          }
          className="svgEye"
          color={"#000"}
        />
      ) : (
        ""
      )}
    </div>
  );
}
export default Input;
