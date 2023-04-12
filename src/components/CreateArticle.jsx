import React, { useState } from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";
import Form from "./Form";
import ArticleService from "../service/article";

const CreateArticle = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [body, setBody] = useState();

  const formSubmit = async (e) => {
    e.preventDefault();
    
    const article = { title, description, body };
    try {
      const response = await ArticleService.postArticle(article);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const formProps = {
    title,
    setTitle,
    description,
    setDescription,
    body,
    setBody,
    formSubmit,
    btnText: "Create",
  };

  return (
    <div className="text-center">
      <h1>Create Article</h1>
      <Form {...formProps} />
    </div>
  );
};

export default CreateArticle;
