import React from "react";

import "./../styles/buttons.css"

export default function Button(props) {
  // les props sont les "arguments" de la fonction MyButton
  console.log(">>>", props);
  // ci dessous: une expression JSX :
  // au final se résoud en HTML + DOM JS classiques
  return (
    <>
      <button onClick={props.callback}>{props.text}</button>
      <p></p>
    </>
  );
}
