import React, { useCallback } from "react";
import { useSelector } from "react-redux";

const ValidationError = () => {
  const { error } = useSelector((error) => error.auth);
  const errorMsg = useCallback(() => {
    return Object.keys(error).map((name) => {
      const msg = error[name].join(", ");
      return `${name}-${msg}`;
    });
  }, [error]);
  return (
    error !== null &&
    errorMsg().map((error) => {
      return (
        <div
          className="alert alert-danger m-1 p-1 text-start"
          role="alert"
          key={error}>
          {error}
        </div>
      );
    })
  );
};

export default ValidationError;
