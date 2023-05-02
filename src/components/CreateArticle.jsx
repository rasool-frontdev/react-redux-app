import React, { useState } from "react";
import Input from "../ui/input";
import TextArea from "../ui/text-area";
import Form from "./Form";
import ArticleService from "../service/article";
import { useDispatch } from "react-redux";
import {
  postArticleDetailFailure,
  postArticleDetailStart,
  postArticleDetailSuccess,
} from "../slice/article";
import { useNavigate } from "react-router-dom";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formSubmit = async (e) => {
    e.preventDefault();


    const article = { title, description, body };
    dispatch(postArticleDetailStart());
    try {
      await ArticleService.postArticle(article);
      dispatch(postArticleDetailSuccess());
      navigate("/");
    } catch (error) {
      dispatch(postArticleDetailFailure(error));
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
