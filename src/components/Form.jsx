import React, { useState } from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";

const Form = ({btnText}) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();

  return (
    <div>
      <form>
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
        <button className="btn btn-lg btn-primary mt-2 w-100">{btnText}</button>
      </form>
    </div>
  );
};

export default Form;
