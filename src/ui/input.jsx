import React, { useState } from "react";

const input = ({ label, state, setState, type = "text" }) => {
  const [value, setValue] = useState(state);
  return (
    <div className="form-floating mt-3 mb-3">
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label htmlFor="floatingInput">{label}</label>
    </div>
  );
};

export default input;
