import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../ui/loader";
import { useNavigate, useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { getArticlesStart, getArticlesSuccess } from "../slice/article";

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

  const deleteArticle = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticles();
  }, []);

  const { articles, isLoading } = useSelector((state) => state.article);
  const { user, isLoggedIn } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  return (
    <div>
      {isLoading && <Loader />}
      <div className="album py-5 bg-light">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map((article) => (
            <div className="col" key={article.id}>
              <div className="card shadow-sm h-100">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false">
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>

                <div className="card-body">
                  <p className="card-text fw-bold m-0">{article.title}</p>
                  <p className="card-text">{article.description}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => {
                        navigate(`/article/${article.slug}`);
                      }}>
                      View
                    </button>
                    {isLoggedIn &&
                      user.username === article.author.username && (
                        <>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() =>
                              navigate(`/edit-article/${article.slug}`)
                            }>
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteArticle(article.slug)}>
                            Delete
                          </button>
                        </>
                      )}
                  </div>
                  <small className="text-muted">
                    {article.author.username}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
