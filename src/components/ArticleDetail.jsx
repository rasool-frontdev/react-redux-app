import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useDispatch, useSelector } from "react-redux";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/article";
import moment from "moment";
import Loader from "../ui/loader";
const ArticleDetail = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { ArticleDetail, isLoading } = useSelector((state) => state.article);

  const getArticleDetail = async () => {
    dispatch(getArticleDetailStart());
    try {
      const response = await ArticleService.getArticleDetail(slug);
      dispatch(getArticleDetailSuccess(response.article));
    } catch (error) {
      dispatch(getArticleDetailFailure(error));
    }
  };

  useEffect(() => {
    getArticleDetail();
  }, [slug]);

  return isLoading ? (
    <Loader />
  ) : (
    ArticleDetail !== null && (
      <div>
        <div className="p-5 mb-4 bg-light rounded-3">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{ArticleDetail.title}</h1>
            <p className="col-md-8 fs-4">{ArticleDetail.description}</p>
            <div className="d-flex gap-3">
              <p>
                {" "}
                <span className="fw-bold text-muted">Created at:</span>{" "}
                {moment(ArticleDetail.createdAt).format("DD MM, YYYY")}
              </p>
            </div>
            <div>{ArticleDetail.body}</div>
          </div>
          <div className="d-flex justify-content-end gap-1">
            <span className="fw-bold text-muted">Author:</span>
            <p className="fw-bold fs-italic">{ArticleDetail.author.username}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ArticleDetail;
