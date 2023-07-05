import React from "react";

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search by name"
    />
  );
};

export default Filter;