import React, { useState } from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";
import Form from "./Form";

const CreateArticle = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();

  return (
    <div className="text-center">
      <h1>Create Article</h1>
      <Form btnText={"Create"} />
    </div>
  );
};

export default CreateArticle;
