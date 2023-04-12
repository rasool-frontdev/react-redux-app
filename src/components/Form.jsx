import React, { useState } from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";

const Form = (props) => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
    btnText,
  } = props;
  return (
    <>
      <form onSubmit={formSubmit}>
        <Input label={"Title"} state={title} setState={setTitle} />
        <TextArea
          label={"Description"}
          state={description}
          setState={setDescription}
        />
        <TextArea
          label={"Body"}
          state={body}
          setState={setBody}
          height={"300px"}
        />
        <button type="submit" className="btn btn-lg btn-primary mt-2 w-100">
          {btnText}
        </button>
      </form>
    </>
  );
};

export default Form;
