import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./styles/style.css";
import AuthService from "./service/auth";
import { useDispatch, useSelector } from "react-redux";
import { signUserSuccess } from "./slice/auth";
import { getItem } from "./helpers/helpersStorage";
import ArticleService from "./service/article";
import { getArticlesStart, getArticlesSuccess } from "./slice/article";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const getUser = async () => {
    try {
      const response = await AuthService.getUser();
      dispatch(signUserSuccess(response.user));
    } catch (error) {
      console.log(error);
    }
  };

  const getArticles = async () => {
    dispatch(getArticlesStart());
    try {
      const response = await ArticleService.getArticles();
      dispatch(getArticlesSuccess(response.articles));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = getItem("token");
    if (token) {
      getUser();
      getArticles();
    }
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
