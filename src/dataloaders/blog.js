import { dataCall } from "./dataCall.js";

const BASE_URL = "https://dev.to/api/articles"

const fetchAllPosts = () => {
  return fetch(`${BASE_URL}?username=seantansey`);
};

const fetchPostBySlug = (slug) => {
  return fetch(`${BASE_URL}/seantansey/${slug}`);
};

export const getAllBlogPosts = () => {
  return dataCall(fetchAllPosts);
};

export const getBlogPostBySlug = (slug) => {
  return dataCall(fetchPostBySlug, slug);
};
