import React from "react";

export const Item = (props) => {
  return (
    <div>
      <span>{props.name}</span>
      <span className="phone">{props.phone}</span>
      <input type="checkbox" />
    </div>
  );
};
