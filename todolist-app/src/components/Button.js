import React from "react";

export default function Button(props) {
  const {className, onClick, icon, text} = props;
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      {icon ? (<i className={icon} />) : text}
    </button>
  );
}
