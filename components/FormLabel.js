import React from "react";

export const FormLabel = ({ text, icon }) => {
  return (
    <label className="form-label">
      <span className="mr-2 text-lg">{icon}</span>
      {text}
    </label>
  );
};