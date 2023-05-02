import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ArticleService from "../service/article";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  postArticleDetailFailure,
  postArticleDetailStart,
  postArticleDetailSuccess,
} from "../slice/article";
import { useNavigate, useParams } from "react-router-dom";
import Form from "./Form";

const EditArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());
      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article));
        setTitle(response.article.title);
        setDescription(response.article.description);
        setBody(response.article.body);
      } catch (error) {
        dispatch(getArticleDetailFailure(error));
      }
    };
    getArticleDetail();
  }, []);

  const formSubmit = async (e) => {
    e.preventDefault();

    const article = { title, description, body };
    dispatch(postArticleDetailStart());
    try {
      await ArticleService.editArticle(slug, article);
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
    btnText: "Edit",
  };

  return (
    <div className="text-center">
      <h1 className="fs-2">Edit Article</h1>
      <div className="w-75 mx-auto">
        <Form {...formProps} />
      </div>
    </div>
  );
};

export default EditArticle;
