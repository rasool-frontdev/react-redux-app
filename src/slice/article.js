import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  articles: [],
  ArticleDetail: null,
  error: null,
};
export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticlesFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.ArticleDetail= action.payload;
    },
    getArticleDetailFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },

    postArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    postArticleDetailSuccess: (state) => {
      state.isLoading = false;
      // state.ArticleDetail= action.payload;
    },
    postArticleDetailFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
  getArticleDetailFailure,
  postArticleDetailStart,
  postArticleDetailSuccess,
  postArticleDetailFailure
} = articleSlice.actions;
export default articleSlice.reducer;
