import React, { useState } from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";

const CreateArticle = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();

  return (
    <div className="text-center">
      <h1>Create Article</h1>
      <form action="">
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
        <button className="btn btn-lg btn-primary mt-2 w-100">Create</button>
      </form>
    </div>
  );
};

export default CreateArticle;
