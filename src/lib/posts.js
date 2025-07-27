// src/lib/posts.js

const requirePost = require.context('../content/blog', false, /\.js$/);

const allPosts = requirePost.keys().map((fileName) => {
  const post = requirePost(fileName).default;
  return post;
});

export const getSortedPosts = () => {
  return [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getAllPostSlugs = () => {
  return allPosts.map(post => ({ slug: post.slug }));
};

export const getPostData = (slug) => {
  return allPosts.find(post => post.slug === slug);
};
