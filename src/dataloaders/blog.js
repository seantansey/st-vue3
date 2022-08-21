import { dataCall } from "./dataCall.js";

const fetchAllPosts = () => {
  return fetch("https://dev.to/api/articles?username=seantansey");
};

const fetchPostBySlug = (slug) => {
  return fetch(`https://dev.to/api/articles/seantansey/${slug}`);
};

export const getAllBlogPosts = () => {
  return dataCall(fetchAllPosts);
};

export const getBlogPostBySlug = (slug) => {
  return dataCall(fetchPostBySlug, slug);
};
