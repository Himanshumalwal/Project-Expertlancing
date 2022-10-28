import React from "react";

function ButtonText(props) {
  return (
    <div className={` ${props.classNames} bg-white drop-shadow-xl flex` }>
      {props.img} &nbsp;
      {props.text} 
    </div>
  );
}

export default ButtonText;
