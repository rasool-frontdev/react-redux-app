import React from "react";

const TextArea = ({ label, state, setState, height = "100px" }) => {
  return (
    <div className="form-floating">
      <textarea
        id="floatingTextarea2"
        placeholder={label}
        className="form-control"
        value={state}
        onChange={(e) => setState(e.target.value)}
        style={{ height: height }}></textarea>
      <label htmlFor="floatingTextarea2">{label}</label>
    </div>
  );
};

export default TextArea;
