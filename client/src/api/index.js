import axios from "axios";

const url = "http://localhost:3030/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
