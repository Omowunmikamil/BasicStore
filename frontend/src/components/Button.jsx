import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className={`${props.className} text-xs md-text-sm text-white bg-gray-800 py-2 px-6 rounded-full hover:bg-gray-600`}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
