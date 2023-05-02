import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/loader";
import ArticleService from "../service/article";
import { getArticlesStart, getArticlesSuccess } from "../slice/article";
import ArtilceCard from "../components/ArtilceCard";

const Home = () => {
  const dispatch = useDispatch();

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
    getArticles();
  }, []);

  const { articles, isLoading } = useSelector((state) => state.article);

  return (
    <div>
      {isLoading && <Loader />}
      <div className="album py-5 bg-light">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map((article) => (
            <ArtilceCard article={article} getArticles={getArticles} key={article.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
