import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArticleService from "../service/article";

const ArtilceCard = ({ article, getArticles }) => {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const { articles, isLoading } = useSelector((state) => state.article);

  const deleteArticle = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug);
      getArticles();
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="col">
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
            {isLoggedIn && user.username === article.author.username && (
              <>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => navigate(`/edit-article/${article.slug}`)}>
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
          <small className="text-muted">{article.author.username}</small>
        </div>
      </div>
    </div>
  );
};

export default ArtilceCard;
